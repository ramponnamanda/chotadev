// import './App.css';
// import 'bulma/css/bulma.min.css'
// import {useState} from "react";

import {useEffect, useState} from "react";

function FlashCard({ data }) {
    const [flip, setFlip] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === " ") {
            // console.log("key pressed : '" + e.key + "'");
            setFlip(!flip);
        }
    }

    useEffect(() => {
        // console.log("in useEffect...");     // is getting called multiple times
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    });

    return (<div className="container">
        <div className={`card main-card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">{data?.title}</div>
            <div className="back">{data?.description}</div>
        </div>
    </div>);
}

export default FlashCard;
