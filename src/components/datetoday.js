import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

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

    <Typography variant="h3" align="center">
      {currentDay}
    </Typography>
  );


}

export default DateToday;