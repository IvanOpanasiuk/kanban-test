import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import createAppStore from './store';

const store = createAppStore();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));
