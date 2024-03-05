import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { AddItemForm } from "./AddItemForm";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [addItemForm, setAddItemForm] = useState(false);
  const [viewItem, setViewItem] = useState("");

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

  function goHomeHandler() {
    setAddItemForm(false);
    setViewItem(false);
  }

  function addItemHandler() {
    setAddItemForm(true);
  }

  return (
    <main>
      <div className="header-container">
        <h1 onClick={goHomeHandler} className="header">
          Our Store
        </h1>
        <div className="header-btns">
          <p onClick={addItemHandler} className="btn">
            Add item
          </p>
        </div>
      </div>
      <div className="page">
        {!addItemForm && (
          <ItemsList
            viewItem={viewItem}
            setViewItem={setViewItem}
            items={items}
          />
        )}
        {addItemForm && (
          <AddItemForm
            setAddItemForm={setAddItemForm}
            fetchItems={fetchItems}
          />
        )}
      </div>
    </main>
  );
};
