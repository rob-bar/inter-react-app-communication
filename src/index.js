import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';
import { ApplicationProvider } from './ApplicationProvider';


ReactDOM.render((<ApplicationProvider><App1 /></ApplicationProvider>), document.getElementById('app1'));
ReactDOM.render((<ApplicationProvider><App2 /></ApplicationProvider>), document.getElementById('app2'));

serviceWorker.unregister();
