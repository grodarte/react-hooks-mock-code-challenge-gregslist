import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
  const [favorite, setFavorite] = useState(false)
  const {id, description, image, location} = item

  function handleFavorite(){
    setFavorite(favorite=>!favorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteItem(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
