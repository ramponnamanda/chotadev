// import './App.css';
// import 'bulma/css/bulma.min.css'
// import {useState} from "react";

function FlashCard({ flip, onClick }) {
    // const [flip, setFlip] = useState(false);

    return (<div className="container">
        <div className={`card main-card ${flip ? 'flip' : ''}`} onClick={() => onClick()}>
            <div className="front">title</div>
            <div className="back">description</div>
        </div>
    </div>);
}

export default FlashCard;
