import React from "react";
import BackDrop from "./BackDrop";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   Drawer: {
      position: "fixed",
      top: 0,
      right: 0,
      maxWidth: "250px",
      width: "80%",
      transform: "translateX(-300px)",
      transition: "0.3s all ease",
      background: "#fff",
      height: "100%",
      zIndex: 100,
      paddingTop: "30px",
      backgroundColor: "#3f51b5",
   },
   open: {
      transform: "translateX(0px)",
   },
   link: {
      color: "#fff",
      fontSize: "18px",
      textDecoration: "none",
   },
   listItem: {
      listStyleType: "none",
      marginBottom: "15px",
   },
});

const links = [
   { label: "Главная", link: "/" },
   { label: "Планеты", link: "/planets" },
   { label: "Персонажи", link: "/peoples" },
   { label: "Техника", link: "/starships" },
];

const Drawer = ({ isOpen, toggleMenuHandler }) => {
   const classes = useStyles();
   const cls = [classes.Drawer];

   const renderItems = (arr) => {
      return arr.map((item) => (
         <Link
            to={item.link}
            className={classes.link}
            onClick={toggleMenuHandler}
         >
            <li className={classes.listItem}>{item.label}</li>
         </Link>
      ));
   };

   const items = renderItems(links);

   const activeBackDrop = isOpen ? (
      <BackDrop onClick={toggleMenuHandler} />
   ) : null;

   if (isOpen) {
      cls.push(classes.open);
   }

   return (
      <>
         {isOpen ? (
            <div className={cls.join(" ")}>
               <nav>
                  <ul>{items}</ul>
               </nav>
            </div>
         ) : null}
         {activeBackDrop}
      </>
   );
};

export default Drawer;
