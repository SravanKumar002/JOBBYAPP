import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
        <Home />
      </Switch>
    )
  }
}

export default App