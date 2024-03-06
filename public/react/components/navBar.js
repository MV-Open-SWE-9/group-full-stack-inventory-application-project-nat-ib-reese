import {React, useState} from "react";
import { Link } from "react-router-dom"; // If you're using react-router-dom

const NavBar = (props, { goHomeHandler, addItemHandler }) => {
    const [addItemForm, setAddItemForm] = useState(false);
    
  function goHomeHandler() {
    setHomePage(true)
     console.log(homePage)
 
    
   
   }
 
   function addItemHandler() {
     setAddItemForm(true);
   }
  return (
    <div className="header-container">
      <div className="header-btns"></div>
      <h1 onClick={goHomeHandler}  className="header">
        Our Store
      </h1>
      <div className="nav-buttons">
        <p onClick={addItemHandler} className="btn">
          Add Item
        </p>
        {/* You can add more navigation items or links here */}
      </div>
    </div>
  );
};

export default NavBar;