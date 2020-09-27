import React from "react";
import { Link } from "react-router-dom";
import {
   Grid,
   Typography,
   CardContent,
   CardMedia,
   CardActions,
   CardActionArea,
   Card,
   Button,
   makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
   media: {
      height: 250,
      zIndex: 2,
      position: "relative",
   },
   item: {
      padding: 10,
   },
   link: {
      textDecoration: "none",
      position: "relative",
   },
   errorImage: {
      position: "absolute",
      background: "url(/img/404.jpg) no-repeat",
      width: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundSize: "242px",
      zIndex: "1",
      backgroundColor: "#fff",
      backgroundPositionY: "20px",
      backgroundPositionX: "center",
   },
   title: {
      zIndex: 3,
      position: "relative",
   },
});

const ItemList = ({ data, name, link }) => {
   const classes = useStyles();

   const renderItems = (arr) => {
      return arr.map((item) => (
         <Grid item xs={3} key={item.id} className={classes.item}>
            <Link to={`/${link}/${item.id}`} className={classes.link}>
               <Card>
                  <CardActionArea>
                     <CardMedia
                        className={classes.media}
                        image={`https://starwars-visualguide.com/assets/img/${name}/${item.id}.jpg`}
                        title="Contemplative Reptile"
                     />
                     <div className={classes.errorImage}></div>
                     <CardContent className={classes.title}>
                        <Typography gutterBottom variant="h5" component="h2">
                           {item.name}
                        </Typography>
                     </CardContent>
                  </CardActionArea>
                  <CardActions>
                     <Button size="small" color="primary">
                        Подробнее
                     </Button>
                  </CardActions>
               </Card>
            </Link>
         </Grid>
      ));
   };

   const content = renderItems(data);
   return <Grid container>{content}</Grid>;
};

export default ItemList;
