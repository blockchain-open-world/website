import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import 'react-toastify/dist/ReactToastify.css';
import './assets/templatemo-cyborg-gaming.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.tsx'
import Token from './pages/Token.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/token",
    element: <Token />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
    <ToastContainer />
  </React.StrictMode>,
)
