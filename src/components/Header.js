import React, { useState } from "react";
import Search from "./Search";

const blankForm = {
  description: "",
  image: "",
  location: ""
}

function Header({ onSearchItems, isChecked, onSortLocation, onNewItem }) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(blankForm)

  function handleFormVisibility(){
    setShowForm(showForm=>!showForm)
  }

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {
        "Content-Type":"Application/JSON"
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(newItem=>{
      onNewItem(newItem) 
      setFormData(blankForm)
      handleFormVisibility()
    })
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchItems={onSearchItems}/>
      <input id="alphabetize" name="alphabetize" type="checkbox" checked={isChecked} onChange={onSortLocation}/>
      <label htmlFor="alphabetize">Location A-Z </label>
      
      <div>
          <button onClick={handleFormVisibility}>Submit New Listing</button>
          {!showForm ? null : 
              <>
                <form onSubmit={handleSubmit}>
                  <input name="description" placeholder="Description" type="text" onChange={handleChange}/>
                  <input name="image" placeholder="Image URL" type="text" onChange={handleChange}/>
                  <input name="location" placeholder="location" type="text" onChange={handleChange}/>
                  <button type="submit">Save</button>
                </form>
                <button onClick={handleFormVisibility}>Cancel</button>
              </>
          }

      </div>
    </header>
  );
}

export default Header;
