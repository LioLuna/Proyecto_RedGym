import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from "./router"
import { createRoot } from "react-dom/client";
import {StrictMode} from "react";

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
);
