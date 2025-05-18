import PropTypes from 'prop-types';

function UserGreeting({username = "Guest", isLoggedIn = false}) {
    const welcomeMsg = <h2 className="welcome-msg">Welcome {username}</h2>;
    const loginPrompt = <h2 className="login-promt">Please Log in to continue</h2>;
    
    return isLoggedIn ? welcomeMsg : loginPrompt;

    // return (
    //     isLoggedIn ? welcomeMsg : loginPrompt
        // props.isLoggedIn 
        // ? <h2 className="welcome-msg"> Welcome {props.username}</h2> 
        // : <h2 className="login-promt"> Please Log in to continue</h2>
    // )
    // if(props.isLoggedIn) {
    //     return <h2> Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2> Please Log in to continue</h2>
    // }
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};


export default UserGreeting;