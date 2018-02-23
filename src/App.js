import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import SignIn from './Common/signin'
import SignUp from './Common/signup'
import About from './Common/About'
import GameLanding from './Home/GameLanding'

// More components
class Developer extends Component {
  render(){
      return (<h1  className="pageBody">Hi Developer</h1>);
  }
}

 


class RouteApp extends Component {
  render(){
      return (
     <div>
       <Header/>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/dev' component={Developer}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/about' component={About}/>
          <Route path='/landing' component={GameLanding}/>
        </Switch>
        <Footer/>
     </div>
      );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <RouteApp  />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
 