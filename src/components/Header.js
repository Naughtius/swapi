import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHandler } from "../store/actions/toggleMenu";

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

   const dispatch = useDispatch();
   const openMenu = useSelector((state) => state.app.openMenu);

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
                  <MenuIcon
                     onClick={() => dispatch(toggleMenuHandler(openMenu))}
                  />
                  <Drawer
                     isOpen={openMenu}
                     toggleMenuHandler={() =>
                        dispatch(toggleMenuHandler(openMenu))
                     }
                  />
               </Hidden>
            </Toolbar>
         </AppBar>
      </div>
   );
};
export default withWidth()(Header);
