import './App.css';
import 'bulma/css/bulma.min.css'
import {useEffect, useState} from "react";
import FlashCard from "./FlashCard";

function App() {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if(e.key === " ") {
                console.log("key pressed : '" + e.key + "'");
                setFlip(!flip);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    });

    return <FlashCard flip={flip} onClick={() => setFlip(!flip)}/>;
}

export default App;
