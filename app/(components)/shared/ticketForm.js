"use client"

import React, { useState } from 'react'
const TicketForm = () => {

    const singleTicket = {
        title: "",
        description: "",
        category: "hardware problem",
        priority: 1,
        progress: 0,
        status: "not started"
    }

    const [newTicket, setNewTicket] = useState(singleTicket);

    // const handleForm = (formData) => {
    //     const name = formData.get("title");
    //     console.log(name);
    // }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewTicket((prevState) => (
            {
                ...prevState,
                [name]: value,
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTicket)
    }

    return (
        <div className='flex justify-center'>
            <form method='post' onSubmit={handleSubmit}>
                <h3 className='text-center'>Create your ticket</h3>

                <label>Title</label>
                <input type="text" id="title" name="title" placeholder="Title" onChange={handleChange} className="input w-full max-w-xs" />
                <br />

                <label>Description</label>
                <input type="text" id="description" name="description" placeholder="Description" onChange={handleChange} className="input w-full max-w-xs" />
                <br />

                <label className="mr-5"> Category</label>
                <select name="category" id="category" onChange={handleChange} value={newTicket.category}>
                    <option value="hardware problem">Hardware problem</option>
                    <option value="software problem">software problem</option>
                    <option value="network problem">network problem</option>
                </select>
                <br />

                <div>
                    Priority  :
                    <label><input type="radio" name="priority"  onChange={handleChange} value={1}/> Option 1</label>
                    <label><input type="radio" name="priority"  onChange={handleChange} value={2}/> Option 2</label>
                    <label><input type="radio" name="priority"  onChange={handleChange} value={3}/> Option 3</label>
                </div>
                <br />

                <label>Progress</label><br />
                <input type="range" id="progress" name="progress" min={0} max={100} className='w-full' onChange={handleChange} value={newTicket.progress} />
                <br />

                <label>Status</label>
                <input type="text" id="status" name="status" placeholder="Status" value={newTicket.status} className="input w-full max-w-xs" onChange={handleChange}/><br />

                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default TicketForm;