import React from "react";
import { useState } from "react";
import apiURL from "../api";

export const EditItemForm = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState(item.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = {
      name: name,
      category: category,
      description: description,
      price: price,
      image: image,
    };

    const res = await fetch(`${apiURL}/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    const data = await res.json();
  };
  return (
    <>
      <h2 className="page-heading">Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder={item.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
