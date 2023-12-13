import { useState } from 'react';

export default function UserProfile({
    stored,
    startEditCallback
}) {


    return <div className='inner-prof'>
            <h2>Username: {stored.name}</h2> 
            <h2>Name: {stored.firstname}</h2> 
            <h2>Password: {stored.password}</h2> 
            <h2>Email: {stored.email}</h2> 
            <h2>Age: {stored.age}</h2> 

        
            <button className='button'
                onClick={startEditCallback}
            >Edit</button>
    
    </div>
}