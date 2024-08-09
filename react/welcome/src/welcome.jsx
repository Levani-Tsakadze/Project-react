import PropTypes from 'prop-types';

function Welcome (props) {
    return (props.isLogged ? <h1 className="Welcome">Welcome, {props.username}</h1> : <h1 className="Login">Please Log in</h1>   
    );
}

Welcome.defaultProps = {
    isLogged: false,
    username: "Guest"
}
Welcome.proptypes = {
    isLogged: PropTypes.bool,
    username: PropTypes.string,
}
export default Welcome