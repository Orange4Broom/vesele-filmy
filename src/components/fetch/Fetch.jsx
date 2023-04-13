import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Navigation from "../navigation/Navigation";

function Fetch() {
  const [fetchedRecords, setFetchedRecords] = useState(null);
  const [language, setLanguage] = useState("cs");
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d426620aab63f7f3dfe843871d10aa30&language=${language}&query=${getQueryString(query)}&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFetchedRecords(data);
      })
      .catch((error) => console.error(error));

    setSearched(query);
    console.log(getQueryString(query));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  }

  useEffect(() => {
    fetchedRecords ? setTotalPages(fetchedRecords.total_pages)
    : console.log("zatím žádné stránky");
  }, [fetchedRecords]);

  // console.log(totalPages);


  return (
    <div className="Fetch">
      <Navigation 
        language={language}
        handleLanguageChange={handleLanguageChange}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="container">
        {searched ? (
          <>
            <h2>You searched: "{searched}"</h2>
            <ul>
              {fetchedRecords.results.map((record) => (
                <Card record={record} key={record.id} language={language}/>
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
