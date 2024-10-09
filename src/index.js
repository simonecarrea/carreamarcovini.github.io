
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { ParallaxProvider } from "react-scroll-parallax";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
); */

