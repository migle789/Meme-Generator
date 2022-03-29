import React from "react";
import img from "../images/meme.png";

export default function Nav () {
    return (
        <header className="header">
            <img className="header--image" src={img} alt="meme"/>
            <h1 className="header--title">Meme Generator</h1>
        </header>
    )
}