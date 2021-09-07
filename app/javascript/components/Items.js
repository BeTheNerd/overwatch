import React from "react";
import Item from "./Item";

const Items = ({ items }) => {
  return (
    <div style={{ margin: "10px", border:"1px solid green"}}>
      <h1>Heros</h1>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;