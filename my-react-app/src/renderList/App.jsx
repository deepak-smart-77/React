import List from "./List.jsx";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "mango", calories: 105 },
    { id: 4, name: "pineapple", calories: 155 },
    { id: 5, name: "coconut", calories: 40 },
  ];
  const vegetables = [
    { id: 6, name: "carrot", calories: 115 },
    { id: 7, name: "potato", calories: 25 },
    { id: 8, name: "onion", calories: 15 },
    { id: 9, name: "tomato", calories: 55 },
    { id: 10, name: "broccoli", calories: 103 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="FRUITS"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="VEGETABLES"/> : null}
    </>
  );
}

export default App;
