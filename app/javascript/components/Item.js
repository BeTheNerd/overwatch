import React from "react";

const Item = ({id, likes, description, category, name }) => {
  const addLike = () => {
    console.log("hi");
  };

  return (
    <div style={{ margin: "10px", border:"1px solid red"}}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{category}</p>
      <button onClick={addLike}>Like</button>
    </div>
  );
};

export default Item;