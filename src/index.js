import React from 'react';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

