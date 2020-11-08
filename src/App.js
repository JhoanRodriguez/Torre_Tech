import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Resume from "./Components/Resume"
import NotFound from "./Components/NotFound"
import "./Components/Styles.css"

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment >)
}


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
