import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(response.data);
      setItems(response.data);
      setisLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="app">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
