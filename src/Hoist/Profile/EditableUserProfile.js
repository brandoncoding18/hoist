import { useState } from "react";

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [firstname, setFirstName] = useState(stored.firstname);
    const [password, setPassword] = useState(stored.password);
    const [email, setEmail] = useState(stored.email);
    const [age, setAge] = useState(stored.age);



    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({name, firstname, password, email, age});
    }

    return <>
            <h2>Username:</h2>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />  

        <h2>Name:</h2>
            <input
                type='text'
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
            />  

<h2>Password:</h2>
            <input
                type='text'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />  

<h2>Email:</h2>
            <input
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />  

<h2>Age:</h2>
            <input
                type='text'
                value={age}
                onChange={e => setAge(e.target.value)}
            />  
       
       
        
            <button  onClick={handleSaveClicked}>Save</button>
            <button  onClick={handleCancelClicked}>Cancel</button>
       
    </>
}