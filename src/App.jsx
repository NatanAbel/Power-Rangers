import logo from './logo.svg';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import AllPlayers from './Pages/AllPlayers';
import NewPlayer from './Pages/NewPlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPlayers/>}/>
        <Route path="/new" element={<NewPlayer/>}/>
      </Routes>
    </div>
  );
}

export default App;
