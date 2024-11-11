import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello.js';

// import Component1 from "./Component1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>숙제를 마무리</h1>
        <p>
          22300646 장태희
        </p>
        <Hello></Hello>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
