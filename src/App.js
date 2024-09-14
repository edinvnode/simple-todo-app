import { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  function addToList() {
    setItems((prevValue) => {
      return [...prevValue, value];
    });
    setValue("");
  }

  function checked(id) {
    setItems((prevValue) => {
      return prevValue.filter((value, index) => index !== id);
    });
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        name="items"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoList lochecked={checked} name={item} key={index} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
