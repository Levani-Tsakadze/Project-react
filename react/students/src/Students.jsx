
function Students (props) {
    return(
        <div className="students">
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Is Student: {props.student ? "Yes" : "No"}</h1>
        </div>
    )
}
Students.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    student : PropTypes.boolean,
}

export default Students