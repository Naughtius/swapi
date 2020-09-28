import React, { useState } from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   makeStyles,
   Hidden,
   withWidth,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../hoc/Drawer";

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

   const [openMenu, SetOpenMenu] = useState(false);

   const toggleMenuHandler = () => {
      SetOpenMenu(!openMenu);
   };

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  SWAPI
               </Typography>
               <Hidden xsDown>
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
               </Hidden>
               <Hidden smUp>
                  <MenuIcon onClick={toggleMenuHandler} />
                  <Drawer
                     isOpen={openMenu}
                     toggleMenuHandler={toggleMenuHandler}
                  />
               </Hidden>
            </Toolbar>
         </AppBar>
      </div>
   );
};
export default withWidth()(Header);
