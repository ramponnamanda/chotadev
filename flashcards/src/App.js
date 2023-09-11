import './App.css';
import 'bulma/css/bulma.min.css'
import {useEffect, useState} from "react";
import FlashCard from "./FlashCard";
import {collection, getDocs} from "firebase/firestore"
import {db} from "./firebase";

function App() {
    const defaultFlashCard = {title: "test title", description: "test description"};
    // const [flashcard, setFlashcard] = useState(defaultFlashCard);
    const [flashcards, setFlashcards] = useState([defaultFlashCard]);
    const [fcIndx, setFcIndx] = useState(0);

    const fetchFlashCards = async () => {
        await getDocs(collection(db, "flashcards"))
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setFlashcards([defaultFlashCard, ...data]);
                setFcIndx(fcIndx + 1);
                // setFlashcard(data[0]);
                // console.log(flashcards);
            });
    }

    useEffect(() => {
        fetchFlashCards();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "ArrowRight" && fcIndx < flashcards.length - 1) {
                setFcIndx(fcIndx + 1);
            }

            if(e.key === "ArrowLeft" && fcIndx > 0) {
                setFcIndx(fcIndx - 1);
            }
        }

       document.addEventListener("keydown", handleKeyDown);
       return () => {
           document.removeEventListener("keydown", handleKeyDown);
        }
    }, [fcIndx, flashcards]);

    return <FlashCard data = {flashcards[fcIndx]}/>;
}

export default App;
