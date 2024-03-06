import React from "react";
import { useState } from "react";
export const Item = ({
  item,
  setViewItem,
  setEditItem,
  fetchItem,
  deleteItemHandler,
}) => {
  const viewItem = (e) => {
    setViewItem(item.id);
  };

  const editItem = (e) => {
    setEditItem(item.id);
  };

  return (
    <>
      <div key={item.id} className="item-container">
        <div className="item__img-title-container">
          <img src={item.image} alt={item.name} />
          <div className="item__titles">
            <h3 onClick={viewItem} className="item-name">
              {item.name}
            </h3>
            <p className="item-category">{item.category}</p>
          </div>
        </div>
        <div className="item__price-delete">
          <p className="item-price">${Number(item.price)}</p>
          <p
            className="btn delete-btn"
            onClick={() => deleteItemHandler(item.id)}
          >
            Delete item
          </p>
          <p onClick={editItem} className="btn">
            Edit item
          </p>
        </div>
      </div>
    </>
  );
};
