import React from 'react';
import homePage from './home';
import Layout from '../Components/Layout';
import singUp from '../Components/SingUpContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/sing-up" component={singUp} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
const MapStateToProps = ({ userReducer }) => userReducer;
export default connect(MapStateToProps, null)(App);
