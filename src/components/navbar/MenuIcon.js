import React from "react";

const MenuIcon = ({ sidebarHandler, handler }) => {
  return (
    <label className="menu-icon-container" htmlFor="menu-check">
      <input
        type="checkbox"
        id="menu-check"
        checked={handler}
        onChange={() => {}}
        onClick={sidebarHandler}
      />
      <div></div>
      <div></div>
      <div></div>
    </label>
  );
};

export default MenuIcon;
