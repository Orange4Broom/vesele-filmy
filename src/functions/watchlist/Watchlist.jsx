import { useState, useEffect } from "react";
import WatchlistCard from "../../components/watchlistCard/WatchlistCard";
import { Link } from "react-router-dom";

function Watchlist() {
  const [savedIds, setSavedIds] = useState([]);
  const [watchlistFilms, setWatchlistFilms] = useState([]);

  useEffect(() => {
    const idsFromLocalStorage = JSON.parse(localStorage.getItem("Ids"));
    if (idsFromLocalStorage) {
      setSavedIds(idsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    savedIds.length === 0
      ? localStorage.removeItem("Ids")
      : localStorage.setItem("Ids", JSON.stringify(savedIds));
  }, [savedIds]);

  function fetchSavedIdsData() {
    savedIds.forEach((savedId) => {
      const url = `https://api.themoviedb.org/3/movie/${savedId}?api_key=d426620aab63f7f3dfe843871d10aa30`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWatchlistFilms((films) => [...films, data]);
        })
        .catch((error) => console.error(error));
    });
  }

  useEffect(() => {
    fetchSavedIdsData();
  }, [savedIds]);

  const handleRemoveId = (id) => {
    setSavedIds((prevArrayIds) => prevArrayIds.filter((arrayId) => arrayId !== id));
    setWatchlistFilms([]);
  };

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <div className="container-grid">
        {watchlistFilms.map((record) => (
          <WatchlistCard records={record} key={record.id} onRemove={handleRemoveId} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
