require('./demo.css');

import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './mainComponent.jsx';

ReactDOM.render(<MainComponent />,
  document.querySelector('#wrapper')
);
