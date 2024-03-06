import React from "react";
import { useState } from "react";

export const ItemInfo = ({ item, setViewItem }) => {
  function backHandler() {
    setViewItem(false);
  }

  return (
    <>
      <p onClick={backHandler} className="back-to-items__link">
        &larr; Back to all items
      </p>
      <div className="detail-item-container">
        <img className="item-detail-img" src={item.image} alt={item.name}></img>
        <div className="item-detail__content">
          <h3 className="item-detail__name">{item.name}</h3>
          <p className="item-detail__category">{item.category}</p>
          <p>{item.description}</p>
          <p>{`$${item.price}`}</p>
        </div>
      </div>
    </>
  );
};
