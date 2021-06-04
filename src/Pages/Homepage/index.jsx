import React from "react";
import Cars from "../../Components/Cars";
import { useStyles } from "./style";

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Cars />
    </div>
  );
};

export default Homepage;
