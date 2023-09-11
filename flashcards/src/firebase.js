// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: update api keys before running, saved to private repo
const firebaseConfig = {
    apiKey: "ASDRsdfslkjdfDHh-FxduSDFkslhvV",
    authDomain: "testapp-f145d2.firebaseapp.com",
    projectId: "testapp-f145d2",
    storageBucket: "testapp-f145d2.appspot.com",
    messagingSenderId: "78454548233024",
    appId: "1:78454548233024:web:3fadf545dc55454c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
