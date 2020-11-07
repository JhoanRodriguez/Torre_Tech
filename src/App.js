import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import "./Components/Styles.css"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment >
  );
}

export default App;
