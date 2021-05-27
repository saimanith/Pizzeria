import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OrderPizza from './OrderPizza';
import BuildPizza from './BuildPizza';
import Home from './Home';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App}></Route>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/OrderPizza" component={OrderPizza}></Route>
      <Route path="/BuildPizza" component={BuildPizza}></Route>
  </div>
    </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
