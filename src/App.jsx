import { useEffect, useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

function App() {
  const [list, setList] = useState(["ready", "set", "go"]);
  const [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={item + idx}>{item}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
