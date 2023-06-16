import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
