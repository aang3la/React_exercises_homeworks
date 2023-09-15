//* useState Hook - se koristi da cuvame nekoja vrednost vo nasata komponenta
// tuka pravime input pole kade sto vnesuvame vrednost koja avtomatski paralelno ke se ispisuva po poleto na ekranot
import { useState } from "react";

export const State = () => {
  // inputValue is the value we want to store
  // setInputValue is the method which we use for changing that value
  const [inputValue, setInputValue] = useState("....");

  let onChange = (event) => {
    // console.log(event.target);
    const newValue = event.target.value;
    // console.log(newValue);
    var element = document.getElementById("result");
    // console.log(element);
    element.innerHTML = newValue;
  };

  let onChangeWithReact = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      {/* <input id="something" placeholder="type something" onChange={onChange} /> */}
      <input
        id="something"
        placeholder="type something"
        onChange={onChangeWithReact}
      />
      <h1 id="result">{inputValue}</h1>
    </div>
  );
};