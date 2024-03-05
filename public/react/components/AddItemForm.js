import React, { useState } from 'react';
import apiURL from '../api';

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${apiURL}/items`, {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    console.log('Item added successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
