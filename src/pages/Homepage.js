import { useDispatch, useSelector } from "react-redux";
import { selectAmount } from "../store/balance/selectors";
import { selectUserName } from "../store/user/selectors";

const Homepage = (props) => {
  // Create a dispatch object.
  const dispatch = useDispatch();

  // const selectAmount = (reduxState) => reduxState.balance.amount;
  const amount = useSelector(selectAmount);
  const userName = useSelector(selectUserName);

  // the selector is ""watching" this specifc piece of state
  // triggers a re-render when there is a change in this piece of state

  // component re-renders
  // 1. on a change of local state => re-render
  // 2. on a change in props => re-render

  const addBalance = () => {
    console.log("Im trying to add balance to my state");

    const action = {
      type: "balance/ADD",
      payload: 10,
    };

    // send it to the store.
    dispatch(action);
  };

  return (
    <div>
      <h1>Homepage</h1>
      <h2>Welcome {userName}</h2>
      <h3>Current Balance: {amount}</h3>
      <div>
        <button onClick={addBalance}>Add $10</button>
      </div>
    </div>
  );
};

export default Homepage;
