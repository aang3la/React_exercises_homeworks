import PropTypes from "prop-types";

export const Semester = (props) => {
    console.log(props);
    return (
            <div>
                <h2>Semester</h2>

                {props.shouldShowSemester ? (
                    <p>Zimski</p>
                ) : (
                    <p>Leten</p>
                )}
            </div>
    )
    
};

Semester.propTypes = {
    shouldShowSemester:PropTypes.bool
};

Semester.defaultProps = {
    shouldShowSemester: true,
}
