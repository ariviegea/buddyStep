import { useState, useEffect } from "react";
import { format } from "date-fns";

const SelectDateStep = () => {

  const today = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useState(today);
  const [step, setStep] = useState("");
  const [stepsList, setStepsList] = useState(() => {
    const buddyStepList = localStorage.getItem("buddyStepList");
    return buddyStepList
      ? JSON.parse(buddyStepList)
      : [];
  });

  const triggerButton = () => {
    setStepsList([...stepsList, { date, step }]);
  };

  useEffect(() => {
    console.log(JSON.stringify(stepsList));
    localStorage.setItem("buddyStepList", JSON.stringify(stepsList));
  }, [stepsList]);

  console.log(stepsList);
  return (
    <div className="App">
      <h1>BuddyStep Big Welcome!</h1>
      <div clasName="selectDate">
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
        <button onClick={() => triggerButton()}>Add</button>
      </div>
    </div>
  );


}

export default SelectDateStep