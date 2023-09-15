import PropTypes from "prop-types";

export const User = (props) => {
    console.log(props);

    return(
        <>
            {props.shouldShowUser ? (

            <div>
                <h2>User:</h2>
                <p>Name: {props.user.name}</p>
                <p>Address: {props.user.address}</p>
                <p>Age: {props.user.age}</p>
            </div>
            ) : (
            <div>
                <h2>User1:</h2>
                <p>Name: {props.user1.name}</p>
                <p>Address: {props.user1.address}</p>
                <p>Age: {props.user1.age}</p>
            </div>
            )}
        </>
    )
}

User.propTypes = {
    user: PropTypes.object,
    user1: PropTypes.object,
    shouldShowUser: PropTypes.bool
};

User.defaultProps = {
    shouldShowUser: false,
    user: {name: "John Doe", address: "Leninova", age: 55}

}

//* Gore e upotrebeno ternanry operator so dvete div; 
//* sto znaci ako vrednosta vo app.js e true, ke se pojavi Martin user, 
//* ako e false ke se pojavi user Laura i nejzinoto info