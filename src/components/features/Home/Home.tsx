'use client'
// src/components/features/Home/Home.tsx
import React from "react";
import { signInWithGoogle, signOutUser } from "../../../services/firebaseAuth";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to Gmail-Swipe</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </button>
      <button
        className="btn btn-secondary"
        onClick={signOutUser}
      >
        Sign Out
      </button>
    </div>
  );
};

export default HomePage;
