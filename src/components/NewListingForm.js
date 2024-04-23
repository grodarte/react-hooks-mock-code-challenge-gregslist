import React, { useState } from "react";

function NewListingForm({onSubmitNewItem}){
    const [newListing, setNewListing] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        const updatedListing = {
            ...newListing,
            [name]: value
        }

        setNewListing(updatedListing)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListing)
        })
        .then(r=>r.json())
        .then(newItem=>onSubmitNewItem(newItem))
        e.target.reset()
    }

    return (
        <>
        <form className="searchbar" onChange={handleChange} onSubmit={handleSubmit}>
            <h1>NEW: </h1>
            <input type="text" name="description" placeholder="Enter listing description..."/>
            <input type="text" name="location" placeholder="location"/>
            <input type="text" name="image" placeholder="image URL"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default NewListingForm