import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function HandleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
  }
  function HanadleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }
  function HandleChangeYear(event) {
    setCarYear(event.target.value);
  }
  function HandleChangeMake(event) {
    setCarMake(event.target.value);
  }
  function HandleChangeModel(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => HanadleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={HandleChangeYear} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={HandleChangeMake}
        placeholder="Enter a make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={HandleChangeModel}
        placeholder="Enetr a model"
      />
      <br />
      <button onClick={HandleAddCar}>Add</button>
    </div>
  );
}
export default MyComponent;
