"use client"
import React from "react"
import { useState } from "react";

const SignUp = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const signUp = async () => {

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
        </div>
    );
};

export default SignUp;