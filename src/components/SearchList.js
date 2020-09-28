import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
   root: {
      width: "100%",
      position: "relative",
      overflow: "auto",
      maxHeight: 210,
   },
   ul: {
      padding: 0,
   },
   link: {
      textDecoration: "none",
      color: "#000",
   },
   listItem: {
      border: "1px solid #D4D4D7",
      marginBottom: "5px",
      borderRadius: "10px",
   },
});

const SearchList = ({ data }) => {
   const classes = useStyles();

   const renderItems = (arr) => {
      return arr.map((item, index) => (
         <Link
            to={`/${item.link}/${item.id}`}
            className={classes.link}
            key={index}
         >
            <ListItem key={index} className={classes.listItem}>
               <ListItemText primary={item.name} />
            </ListItem>
         </Link>
      ));
   };

   const content = renderItems(data);
   return (
      <List className={classes.root}>
         <li>
            <ul className={classes.ul}>{content}</ul>
         </li>
      </List>
   );
};

export default SearchList;
