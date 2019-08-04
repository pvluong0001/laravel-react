import React from 'react'
import { Route } from 'react-router-dom'

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <React.Fragment>
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Lifestyle <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Beauty</a>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-3" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">Tutorials
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-unique"
                     aria-labelledby="navbarDropdownMenuLink-3">
                  <a className="dropdown-item" href="#">Make-up</a>
                  <a className="dropdown-item" href="#">Nails</a>
                  <a className="dropdown-item" href="#">DIY</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light"><i className="fa fa-twitter" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light"><i className="fa fa-google-plus" /></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-unique"
                     aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Component {...matchProps} />
        <h1>Footer</h1>
      </React.Fragment>
    )}/>
  )
}

export default DefaultLayout

// <Component {...matchProps} />