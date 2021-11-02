// src/store/balance/reducer.js
const initialState = {
  amount: 0, // 10
};

// const action = { type: "ADD", payload: 10 };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/ADD": {
      console.log("did the reducer activate this case??");
      return {
        amount: state.amount + action.payload,
      };
    }
    case "ANOTHER_ACTION": {
      return state;
    }
    default: {
      return state;
    }
  }
}
