import logo from './logo.svg';
import './App.css';
import TextCouter from './componetes/TextCouter';

function App() {
  return (
    <div className="App">
      <TextCouter limit={10} />
    </div>
  );
}

export default App;
