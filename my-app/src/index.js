import React, { Fragment } from 'react';  // default import 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './component/Counter';
import ShowInputValue from './component/ShowInputValue';
import Todos from './component/Todos';
import ShoppingList from './component/ShoppingList';
import Shopping from './component/Shopping';
import TodoApi from './component/TodoApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
/*  kind of innerHTML  */

root.render(
    <>
        {/* <App /> */}
        {/* <Counter/> */}
        {/* <ShowInputValue/> */}
        {/* <Todos /> */}
        {/* <ShoppingList/>  */}
        {/* <Shopping/> */}
        <TodoApi/>
        

    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
