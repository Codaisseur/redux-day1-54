// src/store/balance/reducer.js
const initialState = {
  amount: 0, // 10
  nrOfTransactions: 0,
  darkMode: true,
};

// const action = { type: "ADD", payload: 10 };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/ADD": {
      return {
        ...state,
        amount: state.amount + action.payload,
        nrOfTransactions: state.nrOfTransactions + 1,
      };
    }
    case "balance/RESET": {
      return {
        ...state,
        amount: initialState.amount,
      };
    }
    case "ANOTHER_ACTION": {
      return state;
    }
    case "balance/DARK_MODE": {
      // current state
      // action with a payload

      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default: {
      return state;
    }
  }
}
