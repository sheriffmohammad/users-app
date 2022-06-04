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
import apiClient from "./api/apiClient";
import menu from './data/menu'

function App() {

  const onRegisterHandler = () => { }

  return (

    <BrowserRouter>
      <Layout menu={menu}>
        <Routes>
          <Route path='*' element={<Page pageTitle='Not Found' addHeader={false}><NotFound /></Page>} />
          <Route path="/" element={<App />} />
          <Route index element={<Page pageTitle='Home' addHeader={true}><Home /></Page>} />
          <Route path="log-in" element={<Page pageTitle="Log In" addHeader={false}><LogIn /></Page>} />
          <Route path="register" element={<Page pageTitle='Registration' addHeader={false}><Register onRegisterHandler={onRegisterHandler} /></Page>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
