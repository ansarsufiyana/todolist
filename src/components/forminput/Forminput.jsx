import React, { useState } from "react";
import "./Forminput.css";
import Todolist from "./Todolist/Todolist";

function Forminput() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app__form-main">
      <div className="app__form-text">
        <h1>toDo list</h1>
        <input
          type="text"
          placeholder="Add your new todo here"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listofItems}> +
        </button>
        <ol>
          {Items.map((itemval, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Forminput;
