import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="check">cjeck<App /></div>, document.getElementById('root'));
registerServiceWorker();
