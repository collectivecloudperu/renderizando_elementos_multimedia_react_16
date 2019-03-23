import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Home';
import GoogleMap from './GoogleMap'
import Imagen from './Imagen'
import Audio from './Audio'
import Video from './Video'
import Youtube from './Youtube'

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>

      	<div className='index'>

	      	<p>Selecciona un Elemento para verlo: </p>

	        <nav className='mb-5'>
	          <ul className='nav justify-content-center'>
	            <li className='list-group-item'>
	              <Link to='/'>Home</Link>
	            </li>
	            <li className='list-group-item'>
	              <Link to='/google-map/'>Google Map</Link>
	            </li>
	            <li className='list-group-item'>
	              <Link to='/imagen/'>Imagen</Link>
	            </li>
	            <li className='list-group-item'>
	              <Link to='/audio/'>Audio</Link>
	            </li>
	            <li className='list-group-item'>
	              <Link to='/video/'>Video</Link>
	            </li>
	            <li className='list-group-item'>
	              <Link to='/youtube/'>Youtube</Link>
	            </li>
	          </ul>
	        </nav>

	        <Route path='/' exact component={App} />
	        <Route path='/google-map/' component={GoogleMap} />
	        <Route path='/imagen/' component={Imagen} />
	        <Route path='/audio/' component={Audio} />
	        <Route path='/video/' component={Video} />
	        <Route path='/youtube/' component={Youtube} />
      </div>

    </Router>
  );
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
