import React from "react";
import { useState } from "react";

export const ItemInfo = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.name}></img>
      <h1>{item.name}</h1>
      <h3>{item.category}</h3>
      <p>{item.description}</p>
      <p className="item-price">{`$${item.price}`}</p>
    </>
  );
};
