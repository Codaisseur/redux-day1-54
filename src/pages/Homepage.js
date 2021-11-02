import { useDispatch } from "react-redux";

const Homepage = () => {
  // Create a dispatch object.
  const dispatch = useDispatch();

  const addBalance = () => {
    console.log("Im trying to add balance to my state");

    const action = {
      type: "balance/ADD",
      payload: 10,
    };

    // send it to the store.
    dispatch(action);

    // const response = axios.post("http://localhost:4000/login", { email, password });
    // const action2 = {
    //   type: "user/LOGIN",
    //   payload: { token, name, email }
    // };

    // const action3 = {
    //   type: 'user/LOGOUT'
    // }
  };

  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <button onClick={addBalance}>Add $10</button>
      </div>
    </div>
  );
};

export default Homepage;
