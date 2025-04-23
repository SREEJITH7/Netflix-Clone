// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {addDoc, getFirestore, collection} from "firebase/firestore"
// import {
//     signInWithEmailAndPassword, 
//     getAuth, 
//     createUserWithEmailAndPassword, signOut} from "firebase/auth";
// import { toast } from "react-toastify";



// const firebaseConfig = {
//   apiKey: "AIzaSyAcs4Hb6gzv7-0UGKIjmNJEqfXL6o-r6A4",
//   authDomain: "netflix-clone-b5daf.firebaseapp.com",
//   projectId: "netflix-clone-b5daf",
//   storageBucket: "netflix-clone-b5daf.firebasestorage.app",
//   messagingSenderId: "42252531149",
//   appId: "1:42252531149:web:4b7e65073627b2bb3a8084",
//   measurementId: "G-CGXGNHE8X5"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
// const db = getFirestore(app);


// const signup = async (name, email, password) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;
  
//       await addDoc(collection(db, "user"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//       });
//     } catch (error) {
//       console.log(error);
//     //   alert(error.message); // better error display
//       toast.error(error.code);
//     }
//   };
  

// const login = async (email, password) => {
//     try{
//         signInWithEmailAndPassword(auth, email, password);
//     } catch(error) {

//         console.log(error);
//         toast.error(error.code);

//     }
// }

// const logout = () =>{
//     signOut(auth);
// }


// export {auth, db, login, signup, logout};


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,signOut}
        from "firebase/auth";
import {addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAE2_5aAwpprW8mEmFR7zWyxLv2C1R-3jc",
  authDomain: "netflix-aa964.firebaseapp.com",
  projectId: "netflix-aa964",
  storageBucket: "netflix-aa964.firebasestorage.app",
  messagingSenderId: "589656959239",
  appId: "1:589656959239:web:5e5d9cfe50a73327d83da2",
  measurementId: "G-612KN70N96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app)

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login, signup, logout };