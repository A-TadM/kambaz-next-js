import { useState } from "react";
import { FormControl } from "react-bootstrap";

let flag = false;
export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());

  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };

  const firstDateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate()}`;
  };
  
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3 suppressHydrationWarning>{JSON.stringify(startDate)}</h3>
      {!flag ? <h3>{firstDateObjectToHtmlDateString(startDate)}</h3> : <h3>{dateObjectToHtmlDateString(startDate)}</h3>}

      <FormControl
        type="date"
        defaultValue={!flag ? firstDateObjectToHtmlDateString(startDate) : dateObjectToHtmlDateString(startDate)}
        onChange={(e) => { flag = true;
                           setStartDate(new Date(e.target.value));
                         }}
      />
<hr/></div>);}