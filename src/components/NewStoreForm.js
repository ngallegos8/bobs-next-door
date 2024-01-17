import React, { useState } from "react"

function NewStoreForm({ onNewStoreFormSubmit }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [season, setSeason] = useState("")
    const [episode, setEpisode] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newStore = {
            name: name,
            image: image,
            season: season,
            episode: episode
        }
        fetch('http://localhost:8085/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStore)
        })
            .then(response => response.json())
            .then(onNewStoreFormSubmit)
    }



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" id="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
            <input type="number" id="season" placeholder="Season" step="1" value={season} onChange={(e) => setSeason(e.target.value)}/>
            <input type="number" id="episode" placeholder="Episode" step="1" value={episode} onChange={(e) => setEpisode(e.target.value)}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;