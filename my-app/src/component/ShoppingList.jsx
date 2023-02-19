import { useState } from "react";

function ShoppingList() {
  let initial = [];
  let before = [];
  const [items, setItems] = useState(initial);
  const [quantity, setQuantity] = useState(before);
  function AddData(e) {
    e.preventDefault();
    let arr = [...items];
    arr.push(e.target.First.value);
    setItems(arr);
    let brr = [...quantity];
    brr.push(e.target.Second.value);
    setQuantity(brr);
  }
  return (
    <>
      <h1>Items and Quantity</h1>
      <form onSubmit={AddData}>
        <input name="First" />
        <input name="Second" /> <button>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <td>
            {items.map((items) => {
              return <tr>{items}</tr>;
            })}
          </td>
          <td>
            {quantity.map((quantity) => {
              return <tr>{quantity}</tr>;
            })}
          </td>
        </tbody>
      </table>
    </>
  );
}

export default ShoppingList;
