import React,{ useState } from "react";

function MyComponent() {
  
  const [name, setName] = useState("###")
  const updateName = () => {
    setName("Deepak")
  }
  const [age,setAge] = useState(0)
  const incrementAge = () => {
    setAge(age+1)
  }
  const [isStudent,setIsStudent] =useState(false)
  const checkStudent = () => {
    setIsStudent(!isStudent)
  }
    return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age} </p>
      <button onClick={incrementAge}>Set age</button>

      <p>Student: {isStudent ? "Yes":"No"} </p>
      <button onClick={checkStudent}>Toggle</button>
    </div>
  );
}
export default MyComponent
