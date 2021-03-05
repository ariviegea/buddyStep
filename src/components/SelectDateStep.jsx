import { useState } from "react";
import { format } from "date-fns";

const SelectDateStep = ({ stepsList, setStepsList}) => {

  const today = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useState(today);
  const [step, setStep] = useState('');
  const isInList = stepsList.find((item) => item.date === date)
  const triggerButton = () => {
      setStepsList([...stepsList, { date, step }]);
  };


  return (
    <div className="App">
      <h1>BuddyStep Big Welcome!</h1>
      <div className="selectDate">
        <input
          value={date}
          type="date"
          min="2000"
          max={today}
          placeholder="Fill in date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          value={step}
          type="number"
          min="0"
          placeholder="Fill in steps"
          onChange={(e) => setStep(e.target.valueAsNumber)}
        ></input>
        <button onClick={() => triggerButton()} disabled={step === 0 || step === '' || isInList }>Add</button>
      </div>
    </div>
  );


}

export default SelectDateStep