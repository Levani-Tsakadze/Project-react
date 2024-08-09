import PropTypes from "prop-types";

function Welcome(props) {
    let role = "member";

    if (props.username === "Kirola") {
        role = "admin";
    } else if (props.username === "Tornike") {
        role = "moderator";
    }


    return (
        <div>
            {props.isLogged ? (
                <div>
                    <h1 className="Welcome">Welcome, {props.username}</h1>
                    <h1 className="Password">This is Your password: {props.password}</h1>
                    <h1 className="Role">This is your role: {role}</h1>
                    <hr />
                </div>
            ) : (
                <h1 className="Login">Please Log in</h1>
            )}
        </div> 
    );
}

Welcome.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    username: PropTypes.string,
    password: PropTypes.string,
};

Welcome.defaultProps = {
    isLogged: false,
    username: "Guest",
    password: "",
}

export default Welcome;
