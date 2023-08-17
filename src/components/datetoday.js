import React, { useState, useEffect } from "react";

const DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const DateToday = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const dayOfWeek = DaysOfWeek[currentDate.getDay()];
    const month = Months[currentDate.getMonth()];
    const day = currentDate.getDate();
    setCurrentDay(`Today is ${dayOfWeek}, ${month} ${day}.`);
  }, [])

  return (
    <div>
      <p>{currentDay}</p>
    </div>
  );


}

export default DateToday;