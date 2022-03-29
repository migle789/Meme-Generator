import React from "react";

export default function Input () {
    const [meme, func] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
   
    const [allMemeImages, setMemes] = React.useState([])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const img = allMemeImages[randomNumber].url
        func(prevState => ({
            ...prevState,
            randomImage: img
            })
        )
    }

    function handleChange(event) {
        const {name, value} = event.target
        func(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
   
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setMemes(data.data.memes));
    }, [])

    return (
        <main>
        <div className="form">
            <input 
                className="form--input" 
                placeholder="Top text" 
                type="text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
            <input 
                className="form--input" 
                placeholder="Bottom text" 
                type="text"
                name="bottomText"
                value={meme.bottomText}  
                onChange={handleChange}  
                />
            <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
        </div>
        <div className="meme">
        <img className="meme--img" src={meme.randomImage} alt="meme image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}