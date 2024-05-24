"use client"

import React from "react"
import auth from "@/app/services/firebase/firebase.config";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation";

const SignUp = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    // use hooks
    const router = useRouter();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    // create user with email and password
    const signUp = async (e) => {
        e.preventDefault()
        const res = await createUserWithEmailAndPassword(user.email, user.password)

        if (res.user.uid) {
            const resOfsavingUserData = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }

            })
            const res = await resOfsavingUserData.json();
            console.log(res)
            return router.replace('/allTicket')
        }
    }

    // create user with Google login
    const googleSignUpHandler = () => {
        signInWithGoogle(user.email, user.password)
    }

    if (loading) {
        <p>Loading ...</p>
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-center">SignUp</h1>
            <hr />
            <label htmlFor="username" className="mr-5 mt-5">Username</label>
            <input
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
                className="p-2 bg-green-300 text-black"
            />
            <label htmlFor="email" className="mr-5">email</label>
            <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                className="p-2 bg-green-300 text-black"
            />
            <label htmlFor="password" className="mr-5">password</label>
            <input
                type="text"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
                className="p-2 bg-green-300 text-black"
            />
            <button onClick={signUp} className="btn bg-red-400 mt-2 focus:bg-green-700 p-2 border text-black"> Signup</button>
            <button onClick={googleSignUpHandler} className="btn bg-red-400 mt-2 focus:bg-green-700 p-2 border text-black">Google</button>
        </div>
    );
};

export default SignUp;