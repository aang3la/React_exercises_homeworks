import './App.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from './redux/action/inventoryActions';
import { Quantity } from './components/Quantity';

function App() {
  // Initialize a state for the balance
  const [balance, setBalance] = useState(0);

  // Access the quantity state  & get a reference to the dispach func
  const quantity = useSelector((state) => state.quantity);
  const dispach = useDispatch();

  // Function to handle incrementing the quantity
  const handleIncrement = () => {
    dispach(incrementQuantity(balance));
  };

  // Function to handle decrementing the quantity
  const handleDecrement = () => {
    dispach(decrementQuantity(balance));
  };

  return (
    <div className="App">
      <h1>Products inventory in our store</h1>
      <h2>Quantity: <span id='quantity-num'>{quantity}</span></h2>

      <div>
        <button onClick={handleIncrement}>Increment +1 </button>
        <button onClick={handleDecrement}>Decrement -1 </button>
      </div>
      <Quantity />
    </div>
  );
}

export default App;
