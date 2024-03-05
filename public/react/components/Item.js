import React from "react";
import { useState } from "react";

export const Item = ({item, setViewItem, setEditItem}) => {

 

    const viewItem = (e) => {
        setViewItem(item.id)
    }

    const editItem = (e) => {
        setEditItem(item.id)
    }

    return (
        <>
        
    <div key={item.id} className="item-container">
    <div  className="item__img-title-container">
      <img src={item.image} alt={item.name} />
      <div className="item__titles">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-category">{item.category}</p>
      </div>
    </div>
    <div className="item__price-delete">
      <p className="item-price">${item.price.toFixed(2)}</p>
      <p  className="btn delete-btn">
        Delete item
      </p>
      <button onClick={editItem} className="btn">
        Edit item
      </button>
      <button onClick={viewItem} className="btn">
        View item
      </button>
    </div>
  </div>

    
   
        </>
    )

}