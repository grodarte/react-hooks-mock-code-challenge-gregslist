import React, { useState } from "react";

function ListingCard({listing, onDeleteItem}) {
  const {description, id, image, location} = listing
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClickFavorite(){
    setIsFavorite(!isFavorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=>onDeleteItem(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClickFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
