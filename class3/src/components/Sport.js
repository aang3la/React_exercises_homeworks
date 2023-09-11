import PropTypes from 'prop-types';


export function Sport(props) {
    console.log(props)
    const name = props.name;
    const sport = props.sport;

    return(
        <div>
            <h1>My name is {name}!</h1>
            <p>My favorite sport is {sport}.</p>
        </div>
    );
}

//! Installing PropTypes: npm install prop-types --save
//* propTypes = so niv se osiguruvame deka nema da dobieme nekoj error koga ke ja pustime nasata app vo reprodukcija
// simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with
Sport.propTypes = {
    name: PropTypes.string.isRequired,
    sport: PropTypes.string.isRequired
}