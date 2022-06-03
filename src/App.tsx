import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (

    <BrowserRouter>
      <Layout pageTitle='Home Page'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
