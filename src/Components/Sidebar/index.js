import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <div id="itens-menu">

      </div>


    </Menu>
  
  );
};


