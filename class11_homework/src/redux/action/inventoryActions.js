export const incrementQuantity = () => {
    return {
        type: "INCREMENT"
    }
};

export const decrementQuantity = () => {
    return {
        type: "DECREMENT"
    } 
}

export const incrementQuantityManual = (value) => {
    return {
        type: "INCREMENTmanually",
        payload: value, // The payload contains the value by which to increment the quantity
    }
};

export const incrementQuantityManualAsync = (value) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(incrementQuantityManual(value));
      }, 3000);
    };
  };

// Asynchronous Func: When you need to perform operations that don't complete immediately, 
// such as network requests, or animations, async func allow you to write code that can "pause" and 
// "resume" execution as these operations complete.