import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   BackDrop: {
      zIndex: 50,
      background: "rgba(0, 0, 0, 0.7)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
   },
});

const BackDrop = (props) => {
   const classes = useStyles();
   return <div className={classes.BackDrop} onClick={props.onClick} />;
};

export default BackDrop;
