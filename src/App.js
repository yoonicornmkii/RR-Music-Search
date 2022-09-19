import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
// import { DataContext } from "./context/DataContext";
// import { SearchContext } from "./context/SearchContext";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";
import { Fragment } from "react";

function App() {
  const [message, setMessage] = useState("Search for Music!");
  const [data, setData] = useState([]);
  // let searchInput = useRef("");

  const API_URL = "https://itunes.apple.com/search?term=";

  const handleSearch = (e, term) => {
    console.log(term);
    e.preventDefault();
    // Fetch Data
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        // Set State and Context value
        return setData(resData.results);
      } else {
        return setMessage("Not Found");
      }
    };
    fetchData();
  };

  //   return (
  //     <div>
  //       <SearchContext.Provider
  //         value={{
  //           term: searchInput,
  //           handleSearch: handleSearch,
  //         }}
  //       >
  //         <SearchBar />
  //       </SearchContext.Provider>
  //       {message}
  //       <DataContext.Provider value={data}>
  //         <Gallery />
  //       </DataContext.Provider>
  //       <AlbumView />
  //       <ArtistView />
  //     </div>
  //   );
  // }
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
              </Fragment>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
