import React from "react";
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SearchView from '../SearchView/SearchView';
import Footer from '../../components/Footer/Footer';

class App extends React.Component {
    
  render() {
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Hero}></Route>
            <Route path="/search" component={SearchView}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }  
}

export default App;