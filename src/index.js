import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css'

// ReactDOM.render(_que_,_donde);
// for the branch

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);
