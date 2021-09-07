import axios from "axios";
import React, {useState} from "react";
import Items from "./Items";

const App = () => {
  const [items, setItmes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getItems = async ()=>{
    setLoading(true);
    try {
      let res = await axios.get('/items');
      setItmes(res.data);
      
    }catch(err){}
    
  };
  return(
    <div style={{ margin: "10px", border:"1px solid black"}}>
      <h1>Vote for your favorite Hero</h1>
      <button onClick={getItems}>List Heros</button>
      
      <Items items={items} />
    </div>
  );
};

export default App;