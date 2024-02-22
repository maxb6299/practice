function Button() {
    let count = 0;
    let name = 'User';
    
    const handleClick = (username) => {
        count++;
        console.log(`${username} has clicked me ${count} times`);
    }
    
    return(
        <>
            <button onClick={() => handleClick(name)}>Click me</button>
        </>
    )
}

export default Button