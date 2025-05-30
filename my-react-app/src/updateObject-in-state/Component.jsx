import React, { useState } from "react";

function Component() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };
  return (
    <div>
      <p>
        Your Fav car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
export default Component;
