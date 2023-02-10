import React, { useState } from 'react'
import MessageCell from './MessageCell';
import MessageForm from './MessageForm';

export default function Log() {
    const [message, setMessages] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        // console.log(event.target.task.value);
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask])
        event.target.task.value = '';
    }


    return (
        <>
            <h1 className='text-center'>City Log: Name</h1>
            <MessageForm handleFormSubmit={handleFormSubmit} />
            <div className='row'>
                {tasks.map((task, idx) => <MessageCell text={task} key={idx} />)}
            </div>
        </>
    )
}