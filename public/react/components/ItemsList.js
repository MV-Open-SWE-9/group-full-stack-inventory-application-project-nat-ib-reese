import React from "react";

export const ItemsList = ({ items }) => {
  function deleteItemHandler() {
    console.log("delete");
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="item-container">
          <div className="item__img-title-container">
            <img src={item.image} alt={item.name} />
            <div className="item__titles">
              <p>{item.name}</p>
              <p>{item.category}</p>
            </div>
          </div>
          <div className="item__price-delete">
            <p>${item.price}</p>
            <p onClick={deleteItemHandler} className="btn">
              Delete item
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
