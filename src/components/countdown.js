import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import BoxWrapper from "./box";

const Countdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    // Calculate Halloween day for the current year.

    const currentYear = currentDate.getFullYear();
    const halloweenThisYear = new Date(`${currentYear}-10-31`);

    // Calculate time remaining until Halloween
    const timeRemaining = halloweenThisYear - currentDate;

    // Convert milliseconds to days
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

    setCountdown(`${daysRemaining} days until Halloween!`);
  }, []);

  return (
  <BoxWrapper>
    <Typography variant="h3" align="center">
      {countdown}
    </Typography>
  </BoxWrapper>
  )
};

export default Countdown;
