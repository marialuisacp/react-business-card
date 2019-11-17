import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

import List from './screens/List/List';
import Detail from './screens/Detail/Detail';

import { Provider } from 'react-redux';
import { Store } from './store';

import { createBrowserHistory } from 'history';

import './assets/styles/styles.scss';

const history = createBrowserHistory();

const App = () => (
  <Provider store={Store}>
    <HashRouter basename='/' history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));