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
import Page from './components/Page';

function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<Page pageTitle='Not Found'><NotFound /></Page>} />
          <Route path="/" element={<App />} />
          <Route index element={<Page pageTitle='Home'><Home /></Page>} />
          <Route path="log-in" element={<Page pageTitle="Log In"><LogIn /></Page>} />
          <Route path="register" element={<Page pageTitle='Registration'><Register /></Page>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
