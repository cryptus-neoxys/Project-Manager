import React from "react";
import { useState } from "react";
import Card from "../Card/Card.jsx";
import classes from "./List.module.css";

function List() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function inputValue(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <header>ToDo List</header>
      </div>

      <div className="form">
        <ul>
          <div>
            {items.map((cardItem, index) => (
              <Card
                text={cardItem}
                key={index}
                id={index}
                onDelete={deleteItem}
              ></Card>
            ))}
          </div>
        </ul>
        <input
          className={classes.enterText}
          type="text"
          onChange={inputValue}
          value={inputText}
          placeholder="Add new Card"
        ></input>
        <button onClick={addItem}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
export default List;
