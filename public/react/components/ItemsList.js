import { React, useState, useEffect } from "react";
import { Item } from "./Item";
import apiURL from "../api";
import { ItemInfo } from "./ItemInfo";
import { EditItemForm } from "./EditItemForm";

export const ItemsList = ({ items }) => {
  const [viewItem, setViewItem] = useState("");
  const [item, setItem] = useState([]);
  const [editItem, setEditItem] = useState("");
  function deleteItemHandler() {
    console.log("delete");
  }

  function editItemHandler() {
    console.log("edit item");
  }

  async function fetchItem(viewItem, editItem) {
    try {
      if (viewItem) {
        const response = await fetch(`${apiURL}/items/${viewItem}`);
        const item1 = await response.json();
        setItem(item1);
        console.log(item1);
      } else if (editItem) {
        const response = await fetch(`${apiURL}/items/${editItem}`);
        const item1 = await response.json();
        setEditItem(item1);
        console.log(item1);
      }
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  useEffect(() => {
    fetchItem(viewItem);
    fetchItem(editItem);
  }, [viewItem, editItem]);
  console.log(viewItem);

  return (
    <>
      {editItem ? (
        <EditItemForm key={item.id} item={item} />
      ) : !viewItem ? (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onClick={editItemHandler}
            setViewItem={setViewItem}
            setEditItem={setEditItem}
          />
        ))
      ) : (
        <ItemInfo key={item.id} item={item} setViewItem={setViewItem} />
      )}
    </>
  );
};
