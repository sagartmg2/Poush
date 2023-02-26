import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './component/Counter';
import { Footer, Subscription } from './component/Footer';
import Form, { SingupForm } from './component/Form';
import HeaderComponent from './component/Header';
import TodoApi from './component/TodoApi';



function App() {

  let full_form = "JAVASCRIPT xml "
  let str = "{ }"
  return (
    <>
      {/* <BrowserRouter> */}
      <HeaderComponent />
      <Routes>
        <Route path='counter' element={<Counter />} />
        <Route path='login' element={<Form title="login" terms={false} />} />
        <Route path='products' element={<h1>products page</h1>} />
        {/* <Route path='todos' element={<TodoApi />} /> */}
        {/* <Route path='todos/:id' element={<h1>Todo Sllug</h1>} /> // :id is a slug
        <Route path='orders' element={<h1>orders page</h1>} /> */}
        <Route path='todos'>
          <Route path='' index element={<TodoApi />} />
          <Route path=':id' element={<h1>Todo Sllug</h1>} /> // :id is a slug
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
      {/* </BrowserRouter> */}
      <div>

        {/* <hr />
        <h1>REACT JSX {1 + 1}   </h1>
        <p>lorem ... {full_form}  </p>
        <p>we can use javascript using {"{ }"} </p>
        <hr /> */}
      </div>
      {/*  createForm("login") */}
      {/* <Form title="signup" terms={true} />  createForm("login") */}
      {/* 
          PROPS
            - arguement passed in an functional component 
      */}
      <hr />
      {/* <Subscription /> */}
      <Footer />
    </>


  );
}

export default App;
