import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])

  console.log(items)

  function handleDeleteItem(deletedItem){
    const updatedItems = items.filter(item=>item.id !== deletedItem.id)
    setItems(updatedItems)
  }

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r=>r.json())
    .then(itemData=>setItems(itemData))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer itemData={items} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
