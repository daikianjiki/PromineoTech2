import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieApp from './components/movie-app';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MovieApp />
    </BrowserRouter>
);

