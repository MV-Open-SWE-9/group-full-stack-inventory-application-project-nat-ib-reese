import React, { useState } from "react";
import apiURL from "../api";

export const AddItemForm = ({ setAddItemForm, fetchItems }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddItemForm(false);

    const response = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        category: category,
        image: image,
      }),
    });
    fetchItems();

    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImage("");
  };

  return (
    <>
      <h2 className="page-heading">Add Item</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <label>Image (url)</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};
