import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function RouterTab() {
return(
    <div>
        <h1>Forecast</h1>
        <Link to='/Chihuahua'>Chihuahua</Link>
        <Link to='/Juarez'>Juarez</Link>
        <Link to='/Parral'>Parral</Link>
    </div>
)}

export default RouterTab;