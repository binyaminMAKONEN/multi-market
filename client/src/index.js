import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <GoogleOAuthProvider clientId="350337376364-qmp2huls1vvbkqs7gou50geq807pdrr3.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
    
    </BrowserRouter>
);
