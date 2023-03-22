import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import SignUp from './SignUp'
import Login from './Login';
import Footer from './Footer';
import Table from './Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <SignUp/>
    <Login/>
    <Table/>
    <Footer/>
  </>
);

