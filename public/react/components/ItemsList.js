import React from "react";

export const ItemsList = ({ items }) => {
  function deleteItemHandler() {
    console.log("delete");
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p onClick={deleteItemHandler} className="btn">
            Delete item
          </p>
        </div>
      ))}
    </>
  );
};
