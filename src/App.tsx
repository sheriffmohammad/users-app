import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import Layout from './layout/Layout';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import LogIn from './pages/Forms_LogIn';
import Register from './pages/Forms_Register';
import NotFound from './pages/NotFound';
import Page from './layout/Page';
import apiClient from "./api/apiClient";
import { guestMenu, userMenu } from './shared/data/menu'
import { t } from './translation/translate';
import { useTranslate } from './translation';
import BootstrapPlayground from './pages/BootstrapPlayground';

function App() {

  const i18n = useTranslate();
  const { t } = i18n;

  const user = localStorage.getItem('user');

  const [menuData, setMenuData] = useState(user ? userMenu : guestMenu);

  const onRegisterHandler = () => {

    setMenuData(userMenu);
  }
  const onLoginHandler = () => {

    setMenuData(userMenu);
  }
  const onLogOutHandler = () => {

    setMenuData(guestMenu);
  }

  return (

    <BrowserRouter>
      <Layout menu={menuData}>
        <Routes>

          {/* Not found */}
          <Route path='*' element={<Page onLogOutHandler={onLogOutHandler} pageTitle='Not Found' addHeader={false}><NotFound /></Page>} />

          {/* Home */}
          <Route path="/" element={<App />} />
          <Route index element={<Page onLogOutHandler={onLogOutHandler} pageTitle={t('Application.home')} addHeader={true}><Home /></Page>} />

          {/* Log-in */}
          <Route path="log-in" element={<Page onLogOutHandler={onLogOutHandler} pageTitle="Log In" addHeader={false}><LogIn onLoginHandler={onLoginHandler} /></Page>} />

          {/* Register */}
          <Route path="register" element={<Page onLogOutHandler={onLogOutHandler} pageTitle='Registration' addHeader={false}><Register onRegisterHandler={onRegisterHandler} /></Page>} />

          {/* Bootstrap Playground */}
          <Route path="bootstrap-playground" element={<Page onLogOutHandler={onLogOutHandler} pageTitle='Bootstrap Playground' addHeader={false}><BootstrapPlayground/></Page>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
