import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import BlueTrading from 'pages/BlueTrading';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/bluetrading" component={BlueTrading} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
