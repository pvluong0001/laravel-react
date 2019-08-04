/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <DefaultLayout path="/test" component={Test} />
            </Switch>
        </BrowserRouter>
    )
}

const Test = () => {
    return (
        <div>Something good</div>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// require('./components/Example');
