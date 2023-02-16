import './App.css';
import Counter from './component/Counter';
import { Footer, Subscription } from './component/Footer';
import Form, { SingupForm } from './component/Form';
import HeaderComponent from './component/Header';

function createForm(title) {

}


function App() {

  let full_form = "JAVASCRIPT xml "
  let str = "{ }"
  return (
    <>
      <HeaderComponent />
      <div>
        <Counter/>
        <hr/>
        <h1>REACT JSX {1 + 1}   </h1>
        <p>lorem ... {full_form}  </p>
        <p>we can use javascript using {"{ }"} </p>
        <hr />
      </div>
      <Form title="login" terms={false} />  {/*  createForm("login") */}
      <Form title="signup" terms={true} /> {/*  createForm("login") */}
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
