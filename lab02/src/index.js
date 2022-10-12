import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

const form = (
  <button></button>
)
root.render(form)

const foo = () => {
  const element = (
    <div className='container'>
      <h1>Hello world!</h1>
      <h2 className="time">It's {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(foo, 1000);



