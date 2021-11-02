// src/store/balance/reducer.js
const initialState = {
  token: null,
  email: null,
  name: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      // { email, name, token }
      return {
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
}
