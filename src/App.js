import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
