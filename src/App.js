import logo from './logo.svg';
import './App.css';
import Content from "./Content"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to Site Watch time
        </p>
      
      </header>
      <Content clock={new Date()}/>
    </div>
  );
}

export default App;
