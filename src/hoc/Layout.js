import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SearchPanel from "../components/SearchPanel";

const useStyles = makeStyles((theme) => ({
   main: {
      padding: "40px",
      [theme.breakpoints.down("xs")]: {
         padding: "20px",
      },
   },
}));

const Layout = (props) => {
   const classes = useStyles();

   return (
      <>
         <Header />
         <main className={classes.main}>
            <SearchPanel />
            {props.children}
         </main>
      </>
   );
};

export default Layout;
