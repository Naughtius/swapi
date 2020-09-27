import React from "react";
import { Typography, Breadcrumbs, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
   breadcrumbs: {
      marginBottom: "30px",
   },
   breadcrumbsItem: {
      fontSize: 20,
      textDecoration: "none",
   },
   breadcrumbsItemParent: {
      fontSize: 20,
      textDecoration: "none",
      color: "grey",
   },
});

const BreadcrumbsNav = ({ link, categoryName, itemName }) => {
   const classes = useStyles();

   return (
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
         {link ? (
            <Link to={`/${link}`} className={classes.breadcrumbsItemParent}>
               <Typography color="inherit">{categoryName}</Typography>
            </Link>
         ) : (
            <Typography color="textPrimary" className={classes.breadcrumbsItem}>
               {categoryName}
            </Typography>
         )}

         {itemName ? (
            <Typography color="textPrimary" className={classes.breadcrumbsItem}>
               {itemName}
            </Typography>
         ) : null}
      </Breadcrumbs>
   );
};

export default BreadcrumbsNav;
