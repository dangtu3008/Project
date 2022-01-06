import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './components/GlobalStyles'
import NavBarAdmin from './components/NavBarAdmin';
import NavBarCSYT from './components/NavBarCSYT';
import NavBarBYT from './components/NavBarBYT';
import NavBarUser from './components/NavBarUser';
import { useState } from "react";
import useToken from './components/UseToken';
import Login from './components/Login';
import SignUp from './components/SignUp';
export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <GlobalStyles>
      <Header />
      {/* <NavBarAdmin />
      <NavBarBYT />
      <NavBarCSYT />
      <NavBarUser /> */}
      <Footer />
    </GlobalStyles >
  )
}

