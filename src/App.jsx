import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
