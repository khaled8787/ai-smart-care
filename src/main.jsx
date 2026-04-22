import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import RegisterPage from './component/Register'
import LoginPage from './component/Login'
import AuthProvider from './AuthProvider';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>   {/* 👈 HERE */}
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </AuthProvider>
  </StrictMode>,
)
