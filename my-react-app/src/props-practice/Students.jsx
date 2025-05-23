function Students(props){
    return(
        <div className="myDiv">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Students: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Students