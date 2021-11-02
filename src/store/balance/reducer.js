// src/store/balance/reducer.js
const initialState = {
  amount: 0,
};

const regularAction = { type: "ADD_BALANCE", payload: 10 };
// when it gets dispatched

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BALANCE": {
      // do something here.
      // update the state.
      // +10 to the state.amount
      // +payload
      return state;
    }
    case "ANOTHER_ACTION": {
      return state;
    }
    default: {
      return state;
    }
  }
}
