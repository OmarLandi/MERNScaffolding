import React from 'react';
import ReactDOM from 'react-dom';
import ExampleApp from './exampleApp';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<ExampleApp />, document.getElementById('root'));

serviceWorker.unregister();
