import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import "./fetch.scss";
import Pagination from "../../components/pagination/Pagination";

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
  }, [language, page])

  function handleSearch() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d426620aab63f7f3dfe843871d10aa30&language=${language}&query=${getQueryString(query)}&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFetchedRecords(data);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error(error));

    setSearched(query);
    console.log(getQueryString(query));
  }

  function handleSubmit(e) {
    setPage(1);
    e.preventDefault();
    handleSearch();
  }

  function handleNextPage(e) {
    e.preventDefault();
    page < totalPages
    ? (setPage((prevPage) => prevPage + 1), handleSearch())
    : (console.log("Už jsi na konci lol"));
  }

  function handlePreviousPage(e) {
    e.preventDefault();
    page > 1
    ? (setPage((prevPage) => prevPage - 1), handleSearch())
    : (console.log("Jsi na začátku lol"));
  }

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
            <Pagination 
              currentPage={page} 
              totalPages={totalPages}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage} 
              
            />
            <ul>
              {fetchedRecords.results.map((record) => (
                <Card record={record} key={record.id}/>
              ))}
            </ul>
            <Pagination 
              currentPage={page} 
              totalPages={totalPages} 
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage} 
            />
          </>
        ) : (
          <p>Home bruh</p>
        )}
      </div>
    </div>
  );
}

export default Fetch;
