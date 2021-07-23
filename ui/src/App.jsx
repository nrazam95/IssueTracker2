import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from './IssueList.jsx';

// eslint-disable-next-line react/prefer-stateless-function

const element = <IssueList />

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
    module.hot.accept();
}