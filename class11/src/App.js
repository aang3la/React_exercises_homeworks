import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositBalance, withdrawBalance } from "./redux/action/balanceActions";
import { Salary } from "./components/Salary";
import { DoubleBalance } from "./components/DoubleBalance";

function App() {
  // const [balance, setBalance] = useState(100);
  const [vrednost, setVrednost] = useState(0);

  const balance = useSelector((state) => state.balance);
  const dispach = useDispatch();

  // event handler
  const handleDeposit = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance + Number(value));
    console.log("Dispatching deposit");
    dispach(depositBalance(vrednost));
  };

  const handleWithdraw = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance - Number(value));
    console.log("Dispatching withdraw");
    dispach(withdrawBalance(vrednost));
  };

  return (
    <div className="App">
      <div>
        <h1>My bank</h1>
        <h2>Balance: {balance}</h2>
        <input type="number" onChange={(e) => setVrednost(e.target.value)} />
        <div>
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
      <Salary />
      <DoubleBalance />
    </div>
  );
}

export default App;


//! React redux - biblioteka za state management koja e izgradena na baza na flux struktura
// react context - se koristi za staticni raboti: tema, jazik na app, font za app
//* state management - da imame nekoe slicno mesto na context kade sto mozeme da gi cuvame nasite states; da mozeme da gi manipilirame (dinamicki raboti)
//* flux structure -  podatocite ne se cuvaat niz komponentite, tuku se cuvaat vo eden objekt
// alatkite na redux ni ovozmozuvaat zosto se menuva stateot vo nasite app, kako ke se odnesuva celata app logika pri promeni

//! 3 delovi - state, view, actions

//* State - momentalni akcii (tuka vnatre ima reducer)
//* View - interfejsot za users (prikaz na ekran) - sto da pravi so state, kako i so sto da ja promeni
//* Actions - akciite sto se pravat za promena na steate-ot

// So redux, promenata na state avtomatski gi isvestuva onie komponenti za koj e promenet state, deka se napraveni promeni
// pure function (cista f-ja) - sekogas za ist vlez ke dobivame ist izglez; sekogas reducer se pisuva kako pure f-ja
