import React, { useState } from "react";

function Component() {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {

    const newFood = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value = "";

    setFruits(f => ([...f,newFood]))
  };
  function handleRemoveFood(index){
    setFruits(fruits.filter((_,i) => i !== index))
  }

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => 
          <li key={index} onClick={() => handleRemoveFood(index)}>{fruit}</li>
        )}
      </ul>
      <input type="text" id="inputValue" placeholder="Enter a Fruit" />
      <button onClick={handleAddFood}>Add</button>
    </div>
  );
}
export default Component;
