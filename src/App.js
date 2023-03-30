import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Job from './components/Job'
import ProtectedRoute from './components/ProtectedRoute'
import AboutJobDetails from './components/AboutJobDetails'
import Notfound from './components/Notfound'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Job} />
        <ProtectedRoute exact path="/jobs/:id" component={AboutJobDetails} />
        <Home />
        <Route exact path="/not-found" component={Notfound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
