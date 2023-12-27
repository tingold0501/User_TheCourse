import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='754368669319-tjdcd3ekmab7jk90p5lgaqferk9l44kj.apps.googleusercontent.com'>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </GoogleOAuthProvider>

)
