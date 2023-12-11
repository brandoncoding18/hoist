import { useState } from 'react';

export default function UserProfile({
    stored,
    startEditCallback
}) {


    return <div>
            <h2>Username: {stored.name}</h2> 
            <h2>Name: {stored.firstName}</h2> 
            <h2>Password: {stored.password}</h2> 
            <h2>Email: {stored.email}</h2> 
            <h2>Age: {stored.age}</h2> 

        
            <button
                onClick={startEditCallback}
            >Edit</button>
    
    </div>
}