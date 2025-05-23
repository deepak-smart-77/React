function List(props) {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "mango", calories: 105 },
  //     { id: 4, name: "pineapple", calories: 155 },
  //     { id: 5, name: "coconut", calories: 40 },
  //   ];

  // fruits.sort((a,b) => a.name.localeCompare(b.name))  //ascending
  // fruits.sort((a,b) => b.name.localeCompare(a.name))  //desending
  // fruits.sort((a,b) => a.calories - b.calories)  //numeric
  //   fruits.sort((a, b) => b.calories - a.calories);  //reverse
  //   const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  //   const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
