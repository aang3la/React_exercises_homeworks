// Defining the initial state for the quantity
const initialState = { quantity: 0 };

// Define the inventoryReducer function - responsible for handling state changes based on dispatched actions
export const inventoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": {
            return {...state, quantity: state.quantity + 1 }
        }
        case "DECREMENT": {
            return {...state, quantity: state.quantity - 1 }
        }
        case "INCREMENTmanually": {
            return {...state, quantity: state.quantity + Number(action.payload) }
        }
        // If not match, return the current state unchanged
        default: {
            return state;
        }
    }
};