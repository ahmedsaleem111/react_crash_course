import { useState } from "react";
import "./styles.css";
import LargeText from "./components/LargeText";

const App = () => {
  const [counter, setCounter] = useState(0);

  const buttonText = "Click Me";
  const onClickHandler = () => {
    console.log(counter);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <button onClick={onClickHandler}>{buttonText}</button>
      <h1>Hello CodeSandbox!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LargeText text={`You clicked ${counter} times.`} />
      <LargeText text="Some Other Text!!!" />
      <LargeText text="Some More Text!!!" />
      <LargeText text="Even More Text!!!" />
    </div>
  );
};

export default App;
