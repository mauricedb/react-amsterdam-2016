import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const bootstrap = () => {
    ReactDOM.render(<App />,
        document.getElementById('root')
    );
};