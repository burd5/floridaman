import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Difficulty from './Pages/Difficulty'
import Trivia from './Pages/Trivia'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<App />} />
        <Route path ='/difficulty' element={<Difficulty />} />
        <Route path ='/trivia' element={<Trivia />} />
      </Routes>
    </BrowserRouter>
  </div>
);

