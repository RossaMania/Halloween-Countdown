import React from "react";
import Box from "@mui/material/Box";

export default function BoxWrapper(props) {
  return (
    <Box
      sx={{
        marginTop: "10px",
        paddingTop: "10px",
        marginBottom: "10px",
        paddingBottom: "10px",
      }}
    >
      {props.children}
    </Box>
  );
}