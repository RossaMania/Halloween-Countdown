import React, { useEffect, useState } from "react";

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

const Countdown = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const dayOfWeek = DaysOfWeek[currentDate.getDay()];
    const month = Months[currentDate.getMonth()];
    const day = currentDate.getDate();

    // Calculate Halloween day for the current year.

    const currentYear = currentDate.getFullYear();
    const halloweenThisYear = new Date(`${currentYear}-10-31`);
  }, [])

  return (
    <p>days until Halloween!</p>
  )
}

export default Countdown;