import React from 'react';
import LinkSection from './LinkSection';
import { connect } from 'react-redux';
import * as usuariosActions from '../reducers/actions/userActions';
const { deleteLink } = usuariosActions;

class LinkSectionContainer extends React.Component {
  handleCopy = (id) => {
    document.getElementById(`${id}copy`).select();
    document.execCommand('copy');
    document.getElementById(`${id}button`).innerHTML = 'Copied!!';
    document.getElementById(`${id}button`).style.backgroundColor = 'hsl(257, 27%, 26%)';
    setTimeout(() => this.reset(id), 5000);
  };
  reset = (id) => {
    try {
      document.getElementById(`${id}button`).style.backgroundColor = 'hsl(180, 66%, 49%)';
      document.getElementById(`${id}button`).innerHTML = 'Copy';
    } catch {
      return null;
    }
  };
  handleClick = (key) => {
    const { shortLinks, deleteLink } = this.props;
    shortLinks.splice(key, 1);
    deleteLink(shortLinks);
  };

  render() {
    const { shortLinks } = this.props;
    if (shortLinks.length) {
      return (
        <LinkSection
          Data={shortLinks}
          handleClick={this.handleClick}
          handleCopy={this.handleCopy}
        />
      );
    }
    return null;
  }
}
const mapDispatchToProps = {
  deleteLink,
};
const mapStateToProps = ({ userReducer }) => userReducer;
export default connect(mapStateToProps, mapDispatchToProps)(LinkSectionContainer);
