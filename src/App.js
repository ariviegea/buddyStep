import SelectDateStep from './components/SelectDateStep'
import List from './components/List'
import { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [stepsList, setStepsList] = useState(() => {
    const buddyStepList = localStorage.getItem("buddyStepList");
    return buddyStepList
      ? JSON.parse(buddyStepList)
      : [];
  });

  useEffect(() => {
    console.log(JSON.stringify(stepsList));
    localStorage.setItem("buddyStepList", JSON.stringify(stepsList));
  }, [stepsList]);




  return (
    <div className="App">
      <SelectDateStep stepsList={stepsList} setStepsList={setStepsList}/>  
      <List stepsList={stepsList} setStepsList={setStepsList}/>
    </div>
  );
}

export default App;
