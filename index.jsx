import 'babel-polyfill';
import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { SBlock, SText } from './src/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<SBlock padding="10px">
      <SBlock flex="center center" width="100%" height="40px">Flex box</SBlock>
      <SText display="block" size="14px" color="#424242" margin="auto" align="center">Text</SText>
    </SBlock>);
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app'),
);
