import React from "react";

export const ItemsList = ({ items }) => {
  function deleteItemHandler() {
    console.log("delete");
  }

  function editItemHandler() {
    console.log("edit item");
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="item-container">
          <div className="item__img-title-container">
            <img src={item.image} alt={item.name} />
            <div className="item__titles">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-category">{item.category}</p>
            </div>
          </div>
          <div className="item__price-delete">
            <p className="item-price">${item.price}</p>
            <p onClick={deleteItemHandler} className="btn delete-btn">
              Delete item
            </p>
            <p onClick={editItemHandler} className="btn">
              Edit item
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
