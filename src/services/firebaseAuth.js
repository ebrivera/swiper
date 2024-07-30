import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in:", user);
    // Handle user authentication state here (e.g., store in context or Redux)
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
    // Handle user sign-out state here (e.g., update context or Redux)
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { signInWithGoogle, signOutUser };
