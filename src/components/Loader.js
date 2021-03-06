import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   loader: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
   },
});

const Loader = () => {
   const classes = useStyles();

   return (
      <div className={classes.loader}>
         <CircularProgress />
      </div>
   );
};

export default Loader;
