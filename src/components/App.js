import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';
import Loading from './Loading';
import { hot } from 'react-hot-loader';

const AsyncDynamicPage=importedComponent(
  ()=>import(/* webpackChunkName: 'DynamicPage' */'./DynamicPage'),
  {
    LoadingComponent: Loading
  }
);

const AsyncNoMatch=importedComponent(
  ()=>import(/* webpackChunkName: 'DynamicPage' */'./NoMatch'),
  {
    LoadingComponent: Loading
  }
);



const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
export default hot(module)(App);