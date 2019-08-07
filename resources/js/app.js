/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import ProjectCreate from './components/pages/ProjectCreate'

require('./bootstrap')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import User from './components/pages/User'
import Project from './components/pages/Project'
import Home from './components/pages/Home'

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path="/" exact component={Home}/>
        <DefaultLayout path="/users" exact component={User}/>
        <DefaultLayout path="/projects" exact component={Project}/>
        <DefaultLayout path="/projects/create" component={ProjectCreate}/>
      </Switch>
    </BrowserRouter>
  )
}

if (document.getElementById('root')) {
  ReactDOM.render(<App/>, document.getElementById('root'))
}

// require('./components/Example');
