import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Page from '../src/Page.jsx';

// eslint-disable-next-line react/prefer-stateless-function

const element = (
    <Router>
        <Page />
    </Router>
);

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
    module.hot.accept();
}