import React from 'react';
import {render} from 'react-dom';
import Root from './js/components/Root';
import registerServiceWorker from './js/registerServiceWorker';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './js/configureStore';

const store = configureStore();
render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();
