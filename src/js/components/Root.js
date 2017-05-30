/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter >
            {/*<Route path="/(:filter)" component={App} />*/}
            <App/>
        </BrowserRouter>
    </Provider>
);

Root.PropTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
