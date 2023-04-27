import FetchFilms from "./functions/fetchFilms/FetchFilms";
import { Route, Routes } from 'react-router-dom';
import Watchlist from "./functions/watchlist/Watchlist";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchFilms />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  )
}

export default App;
