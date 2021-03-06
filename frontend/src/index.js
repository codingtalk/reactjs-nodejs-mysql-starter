import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import 'antd/dist/antd.min.css';
import './assets/style/reset.scss';
import './assets/style/global.scss';
import Log4js from './utils/log4js';
import './utils/exceptionResolver';


window.$log4js = new Log4js();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
