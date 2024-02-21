function UserGreeting(props) {
    return(
        props.isLoggedIn ? <h2 className='welcome-message'>Welcome {props.username}</h2>
                         : <h2 className='login-message'>Please log in to continue</h2> 
    )
}

export default UserGreeting