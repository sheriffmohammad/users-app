import React, { useState } from 'react';
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
import { guestMenu, userMenu } from './data/menu'

function App() {

  const user = localStorage.getItem('user');

  const [menuData, setMenuData] = useState(user ? userMenu : guestMenu);

  const onRegisterHandler = () => {

    setMenuData(userMenu);

    console.log("MENU CHANGE");
  }

  return (

    <BrowserRouter>
      <Layout menu={menuData}>
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
