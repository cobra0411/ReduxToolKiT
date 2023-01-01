import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { r1Actions, r2Actions } from "./reducer";
export default function App() {
  const count1 = useSelector((state) => state.myReducer1.counter);
  const count2 = useSelector((state) => state.myReducer2.counter);
  const dispatch = useDispatch();
  const incre1 = () => {
    console.log("dispatching");
    dispatch(r1Actions.increment());
  };
  const incre2 = () => {
    console.log("dispatching");
    dispatch(r2Actions.increment());
  };
  const decre1 = () => {
    console.log("dispatching");
    dispatch(r1Actions.decrement());
  };
  const decre2 = () => {
    console.log("dispatching");
    dispatch(r2Actions.decrement());
  };
  console.log("count", count1);
  return (
    <div className="App">
      COUNTER1: {count1}
      <br />
      COUNTER2: {count2}
      <h1>Hello CodeSandbox</h1>
      <button onClick={incre1}> INCREMENT1</button>
      <br />
      <button onClick={incre2}> INCREMENT2</button>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={decre1}> DECREMENT1</button>
      <br />
      <button onClick={decre2}> DECREMENT2</button>
    </div>
  );
}
