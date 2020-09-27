import React from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
   root: {
      flexGrow: 1,
   },
   title: {
      flexGrow: 1,
   },
   link: {
      textDecoration: "none",
      color: "#fff",
   },
});

const Header = () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  SWAPI
               </Typography>
               <NavLink to="/" className={classes.link}>
                  <Button color="inherit">Главная</Button>
               </NavLink>
               <NavLink to="/planets" className={classes.link}>
                  <Button color="inherit">Планеты</Button>
               </NavLink>
               <NavLink to="/peoples" className={classes.link}>
                  <Button color="inherit">Персонажи</Button>
               </NavLink>
               <NavLink to="/starships" className={classes.link}>
                  <Button color="inherit">Техника</Button>
               </NavLink>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
