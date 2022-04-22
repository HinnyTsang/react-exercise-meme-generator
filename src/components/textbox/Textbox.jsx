import React, { useState, useEffect } from 'react'
import './textbox.css'

const Textbox = () => {

    // state to store the information of the form.
    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    // stste to store the memes array.
    let [memesData, setMemesData] = useState([]);

    // get memes data from the API
    useEffect(() => {
        async function getMemesAPI() {
            const response = await fetch("https://api.imgflip.com/get_memes") // get data from the API
            const data = await response.json() // convert into json
            setMemesData(data.data.memes) // update the memes state
        }
        getMemesAPI()
    }, []) // only call when the page refresh


    // call when the form submit.
    function handleSubmit(event) {

        event.preventDefault(); // prevent refresh
        const randNumber = Math.floor(Math.random() * memesData.length)

        // choose a new image.
        setMeme(prev => (
            {
                ...prev,
                randomImage: memesData[randNumber].url
            }
        ))
    }

    function handleChange(event) {

        // common function for several state to update.
        // name is a identifier for the state.
        const { name, value } = event.target;

        setMeme(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }


    return (
        <main>
            <form
                className='textbox--container'
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='textbox--type-area'
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                />
                <input
                    type="text"
                    className='textbox--type-area'
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                />
                <button
                    type="submit"
                    className='textbox--button'
                >Get a new meme image 🖼</button>
            </form>
            <div className='memes'>
                <h1 className='memes--text top'>{meme.topText}</h1>
                <img src={meme.randomImage} className='memes--image'></img>
                <h1 className='memes--text bottom'>{meme.bottomText}</h1>
            </div>
        </main>
    )
}

export default Textbox