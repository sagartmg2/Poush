import './App.css';
import { Footer, Subscription } from './component/Footer';
import HeaderComponent from './component/Header';

function App() {

  let full_form = "JAVASCRIPT xml "
  let str = "{ }"
  return (
    <>
      <HeaderComponent />
      <div>
        <h1>REACT JSX {1 + 1}   </h1>
        <p>lorem ... {full_form}  </p>
        <p>we can use javascript using {"{ }"} </p>
      </div>
      <Subscription />
      <Footer />
    </>


  );
}

export default App;
