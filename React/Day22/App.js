import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Para from './components/paragraph';
import Multi from './multiple';
import Names from './class';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome/>
        <Para name="lokesh"/>
        <Multi x="karth"/>
        <Names sub="javascript"/>
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
