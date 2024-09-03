import "./App.css";
import { useState } from "react";
import ListMovie from "./ListMovie.js";
import ErrorBoundary from "./ErrorBoundary.js";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickSearch = () => {
    setSearch(text);
  };

  return (
    <ErrorBoundary>
      <h1>Hands-on Lifecycle Methods</h1>
      <div className="search">
        <label>
          Search movie
          <input onChange={onChangeText} type="text" />
        </label>
        <button onClick={onClickSearch}>Search</button>
      </div>
      <ListMovie search={search} />
    </ErrorBoundary>
  );
}

export default App;
