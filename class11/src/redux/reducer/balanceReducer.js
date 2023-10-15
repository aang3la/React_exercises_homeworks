// npm i react-redux
// npm i redux
// npm i @reduxjs/toolkit
// npm i redux-thunk

const initialState = { balance: 100 };

// action are the actions which are fired by the dispacher
export const balanceReducer = (state = initialState, action) => {
  console.log("Inside the reducer");
  console.log(action);
  switch (action.type) {
    case "DEPOSIT": {
      return { ...state, balance: state.balance + Number(action.payload) };
    }

    case "WITHDRAW": {
      return { ...state, balance: state.balance - Number(action.payload) };
    }

    default: {
      return state;
    }
  }
};

// Reducers must be pure functions
// RULES THAT REDUCERS MUST FOLLOW
// Given a set on inputs, it must always return the same output
// No surprises, no side-effect, no API CALLS

//A reducer function is where you will put your state logic. 
// It takes two arguments, the current state and the action object, 
// and it returns the next state