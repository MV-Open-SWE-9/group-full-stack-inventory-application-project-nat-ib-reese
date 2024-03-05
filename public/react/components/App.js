import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function addItemHandler() {
    console.log("add item");
  }
  function editItemHandler() {
    console.log("edit item");
  }

  return (
    <main>
      <div className="header-container">
        <h1 className="header">Our Store</h1>
        <div className="header-btns">
          <p onClick={addItemHandler} className="btn">
            Add item
          </p>
          <p onClick={editItemHandler} className="btn">
            Edit item
          </p>
        </div>
      </div>
      <h2 className="page-heading">All items</h2>
      <ItemsList items={items} />
    </main>
  );
};
