import { OldFilmEffect } from './components/OldFilmEffect';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { PreviousWork } from './components/PreviousWork';
import { WhereToFind } from './components/WhereToFind';

function App() {
  return (
    <div className="App">
      <OldFilmEffect />
      <Header />
      <Intro />
      <PreviousWork />
      <WhereToFind />
    </div>
  );
}

export default App;
