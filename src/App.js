import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import bgMusic from './assets/sounds/kronos_unveiled.mp3'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Ola Funciona</h1>
        <audio controls loop>
          <source src={bgMusic} />
        </audio>
      </div>
    </Router>
  );
}

export default App;
