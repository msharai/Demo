import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
