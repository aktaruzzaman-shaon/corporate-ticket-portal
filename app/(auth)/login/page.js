"use client"
import React, { useState } from 'react';

const login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const signUp = async () => {
        
    }
    return (
        <div className="flex flex-col">
            <h1 className="text-center">Login</h1>
            <hr />
            <label htmlFor="email" className='mt-5' >email</label>
            <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                className="p-2 bg-green-300 text-black "
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
        </div>
    );
};

export default login;