import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

import List from './screens/list/List';
import Item from './screens/item/Item';
import { HashRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { Store } from './store';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter basename='/' history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/letter" component={Item} />
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
