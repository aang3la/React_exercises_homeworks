import { useDispatch } from "react-redux";
import { useState } from 'react';
import { incrementQuantityManual } from "../redux/action/inventoryActions";
import { incrementQuantityManualAsync } from "../redux/action/inventoryActions";

export const Quantity = () => {
    const [vrednost, setVrednost] = useState(0);
    const dispach = useDispatch();

    const handleChange = () => {
        dispach(incrementQuantityManual(vrednost))
    }

    const handleChangeAsync = () => {
        dispach(incrementQuantityManualAsync(vrednost))
    }

    return (
        <>
            <h4>✨ Add quantity manually ✨</h4>
            <input type="number" placeholder="Enter a number" onChange={(e) => setVrednost(e.target.value) }/>
            <div>
                <button onClick={handleChange}>Add quantity</button>
                <button onClick={handleChangeAsync}>Add quantity ASYNC</button>
            </div>
        </>
    )
}