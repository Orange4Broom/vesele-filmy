function Navigation({language, handleLanguageChange, query, setQuery, handleSubmit}) {

  return (
    <div className="Navigation">
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
      </div>
  )
}

export default Navigation;