import React from "react";
import { useState } from "react";
import apiURL from "../api";

export const EditItemForm = ({item}) => {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name)
        // console.log(content)
        // console.log(title)
        // console.log(email)
        // console.log(tags)
        // console.log(e.target.value)
        const articleData = {
            name: name, 
            category: category, 
            description: description, 
            price:price, 
            image: image,

        }

        const res = await fetch(`${apiURL}/items/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(
                articleData
            )
        })
        const data = await res.json()
    }
   return (
    <>
<form onSubmit={handleSubmit}>
  <label>
    Name: 
    <input type="text" name="name" placeholder={item.name} value={name} onChange={e => setName(e.target.value)}/>
  </label>
  <label>
  category: 
    <input type="text" name="category" placeholder={item.category} value={category} onChange={e => setCategory(e.target.value)}/>
  </label>
  <label>
  description: 
    <input type="text" name="description" placeholder={item.description} value={description} onChange={e => setDescription(e.target.value)}/>
  </label>
  <label>
  price: 
    <input type="text" name="price" placeholder={item.price} value={price} onChange={e => setPrice(e.target.value)}/>
  </label>
  <label>
  image url: 
    <input type="text" name="image" placeholder={item.image} value={image} onChange={e => setImage(e.target.value)}/>
  </label>
  <button type='submit'>Submit</button>
</form>


    </>
   ) 
}