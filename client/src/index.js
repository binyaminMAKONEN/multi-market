import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <BrowserRouter>
    <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_URL}>
      <ToastContainer />
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}> <App /></Provider>
      </GoogleOAuthProvider>
      </CloudinaryContext>
    </BrowserRouter>
  
);
