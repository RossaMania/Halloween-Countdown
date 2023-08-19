import React from "react";
import Typography from "@mui/material/Typography";
import BoxWrapper from "./box";
import { ThemeProvider } from "@emotion/react";
import halloweenTheme from "./../themes/halloweenTheme";


const HalloweenStatus = () => {

  return (
    <ThemeProvider theme={halloweenTheme}>
      <BoxWrapper>
        <Typography>
          It's Halloween!
        </Typography>
      </BoxWrapper>
    </ThemeProvider>
  );

}

export default HalloweenStatus;
