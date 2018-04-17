import { AppContainer, hot } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }
  
  render(App)
  
  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      // if you are using harmony modules ({modules:false})
      render(App)
      // in all other cases - re-require App manually
      render(require('./components/App'))
    })
  }