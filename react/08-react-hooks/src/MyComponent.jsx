import React, {useState} from 'react'

function MyComponent() {
    
    const [name, setName] = useState('Guest');

    const updateName = () => {setName("John")};
    
    return(
        <>
            <div>Name: {name}</div>
            <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default MyComponent