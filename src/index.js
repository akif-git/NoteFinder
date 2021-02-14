import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(

    <Auth0Provider
    domain = "uploadnote.us.auth0.com"
    clientId = "R8FlQqawn1KpTqyvs9fvJ63hHkULxxPH"
    redirectUri={window.location.origin} // redirect to where
    >
      <Router><App /></Router>
    </Auth0Provider>,
    document.getElementById('root')  
  );


