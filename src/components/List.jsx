import {Fragment } from "react";

const List = ({stepsList, setStepsList}) => {

  const changeDate = (dateToChange) => {
    const newValue = prompt('Please update steps:')
    setStepsList(stepsList.map(({date, step}) => {
      if(date === dateToChange ) {
        return { date, step: newValue}
      }
      return {date, step}
    }))
 }

  return(
  <div className="list">
  <ul style={{listStyle: "none"}}>
     { stepsList.map(({date, step}) => (
       <Fragment key={date}>
       <li key={date}>{date}, {step} <button onClick={() => changeDate(date)}>Edit</button></li>
       </Fragment>
     ))}
  </ul>
  </div>
  )
}

export default List