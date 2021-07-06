import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css'

// ReactDOM.render(_que_,_donde);
// for the branch

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
