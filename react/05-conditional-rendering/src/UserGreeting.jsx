import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>

    const loginMessage = <h2 className='login-message'>Please log in to continue</h2> 
    
    return(
        props.isLoggedIn ? welcomeMessage
                         : loginMessage
    )
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    username: 'guest',
    isLoggedIn: false
}

export default UserGreeting