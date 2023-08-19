import React from "react";
import Typography from "@mui/material/Typography";
import BoxWrapper from "./box";
import { ThemeProvider } from "@mui/material"
import halloweenTheme from "./../themes/halloweenTheme";


const HalloweenStatus = () => {

  return (
    <ThemeProvider theme={halloweenTheme}>
      <BoxWrapper>
        <Typography data-testid="text-content">It's Halloween!</Typography>
      </BoxWrapper>
    </ThemeProvider>
  );

}

export default HalloweenStatus;
