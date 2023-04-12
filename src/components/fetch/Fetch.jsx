import React, { useState, useEffect } from "react";
import Card from "../card/Card";

function Fetch() {
  const [fetchedRecords, setFetchedRecords] = useState(null);
  const [language, setLanguage] = useState("cs");
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState("");

  const getQueryString = (query) => {
    const regex = /\s+/g;
    const queryString = query.trim().replaceAll(regex, "+");
    return queryString;
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, [language])

  function handleSearch() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d426620aab63f7f3dfe843871d10aa30&language=${language}&query=${getQueryString(query)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setFetchedRecords(data))
      .catch((error) => console.error(error));

    setSearched(query);
    console.log(getQueryString(query));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  }

  return (
    <div className="Fetch">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Nazev Filmu"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="searchButton" type="submit">
          Hledat
        </button>

        <label>
        <input
          type="radio"
          value="cs"
          checked={language === "cs"}
          onChange={handleLanguageChange}
        />
        Czech
      </label>
      <label>
        <input
          type="radio"
          value="en"
          checked={language === "en"}
          onChange={handleLanguageChange}
        />
        English
      </label>
      </form>
      <div className="container">
        {fetchedRecords ? (
          <>
            <h2>You searched: "{searched}"</h2>
            <ul>
              {fetchedRecords.results.map((record, id) => (
                <Card record={record} key={record.id}/>
              ))}
            </ul>
          </>
        ) : (
          <p>bruh</p>
        )}
      </div>
    </div>
  );
}

export default Fetch;
