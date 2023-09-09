import './App.css';
import 'bulma/css/bulma.min.css'
import {useEffect, useState} from "react";

function App() {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress);
        return () => {
            window.removeEventListener("keypress", handleKeyPress)
        }
    }, [flip]);

    const handleKeyPress = (e) => {
        if(e.key === " ") {
            // console.log("key pressed : '" + e.key + "'");
            setFlip(!flip);
        }
    }

    return (<div className="container">
        <div className={`card main-card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">title</div>
            <div className="back">description</div>
        </div>
    </div>);
}

export default App;
