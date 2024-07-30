// src/services/firebaseAuth.js
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // Store user and token as needed
    console.log("User Info: ", user);
    console.log("Access Token: ", token);
  } catch (error) {
    console.error("Error during sign-in: ", error);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error during sign-out: ", error);
  }
};

export { signInWithGoogle, signOutUser };
