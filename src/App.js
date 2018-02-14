import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './home/Home'
import SignIn from './home/signin'
import SignUp from './home/signup'
import About from './home/About'

// More components
class Developer extends Component {
  render(){
      return (<h1>Hi Developer</h1>);
  }
}




class RouteApp extends Component {
  render(){
      return (
     <div>
       <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/dev' component={Developer}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/about' component={About}/>
        </Switch>
     </div>
      );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}


export default App;
 