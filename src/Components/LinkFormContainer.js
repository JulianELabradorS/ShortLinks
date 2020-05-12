import React from 'react';
import LinkForm from './LinkForm';
import { connect } from 'react-redux';
import * as usuariosActions from '../reducers/actions/userActions';
const { shorten } = usuariosActions;

class LinkFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkInput: '',
      alert: false,
    };
  }
  //Request(POST) to the API to shorten the links
  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.linkInput) {
      this.alert('form__input', 'Please add a link.');
    } else {
      fetch(`https://rel.ink/api/links/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: `${this.state.linkInput}`,
        }),
      })
        .then(async (response) => {
          this.setState({ linkInput: '' });
          let link = await response.json();
          const { shortLinks } = this.props;
          if (!link.hashid) {
            this.alert(
              'form__input',
              "Invalid link please insert one of this format ('https://www.example.com')"
            );
          }
          if (shortLinks.length !== 0) {
            const filter = shortLinks.filter((shortenlink) => {
              return shortenlink.hashid === link.hashid;
            });
            if (filter.length !== 0) {
              this.alert(
                `${filter[0].hashid}`,
                'the link you are trying to shorten is already in the list'
              );

              setTimeout(() => {
                this.reset(`${filter[0].hashid}`);
              }, 5000);
            } else {
              this.props.shorten(link);
            }
          } else {
            this.props.shorten(link);
          }
        })
        .catch((error) => {
          console.log(error);
          return alert('server error, try again later');
        });
    }
  };

  alert = (id, message) => {
    document.getElementById(id).style.border = 'red 2px solid';
    document.getElementById('label__alert').innerHTML = message;
  };

  //reset state and styles of alert
  reset = (id) => {
    try {
      document.getElementById('label__alert').innerHTML = null;
      document.getElementById(id).style.border = 'none';
    } catch {
      return null;
    }
  };
  //input handler (sets the value in the state)
  handleChange = (e) => {
    this.reset('form__input');
    this.setState({
      linkInput: e.target.value,
    });
  };

  render() {
    return (
      <LinkForm
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        links={this.props.shortLinks}
      />
    );
  }
}

const mapDispatchToProps = {
  shorten,
};
const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkFormContainer);
