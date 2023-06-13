import { auth } from "./init.js";
import {updateProfile, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const logInWithGit = async () => {
    try {
        await signInWithPopup(auth, gitProvider);
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const logInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error({ err });
      alert(err.message);
    }
  };

  export const registerWithEmail = async (email, password, displayName) => {
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      alert('Konto zostało utworzone!');
    } catch (err) {
      console.error({ err });
      alert(err.message);
    }
  };

export const useUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((user) => {
            //if(user) { //zeby koleczko sie krecilo jak sie laduje 
            setUser(user);
            //} else {
            //   setUser(false);
            //}
        });
        return () => unsubcribe();
    }, []
    );
    return user;
};

export const logout = () => signOut(auth);