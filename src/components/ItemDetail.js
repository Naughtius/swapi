import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BreadcrumbsNav from "./BreadcrumbsNav";

const useStyles = makeStyles((theme) => ({
   detailContainer: {
      display: "flex",
      justifyContent: "flex-start",

      [theme.breakpoints.down("sm")]: {
         flexDirection: "column",
      },
   },
   detailInfo: {
      marginLeft: "30px",
      width: "50%",
      [theme.breakpoints.down("sm")]: {
         width: "100%",
         marginLeft: "0px",
      },
   },
   imgWrap: {
      width: "50%",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
         width: "100%",
      },
   },
   errorImage: {
      top: 0,
      left: 0,
      right: 0,
      width: "50%",
      bottom: 0,
      zIndex: 1,
      position: "absolute",
      background: "url(/img/404.jpg) no-repeat",
      backgroundSize: "242px",
      backgroundColor: "#fff",
      backgroundPosition: "center",
      height: "350px",
      [theme.breakpoints.down("sm")]: {
         width: "100%",
         height: "100%",
      },
   },
   img: {
      zIndex: 2,
      position: "relative",
      borderRadius: "10px",
      width: "100%",
   },
}));

const ItemDetail = ({ data, nameCategory, name, link }) => {
   const classes = useStyles();

   return (
      <>
         <BreadcrumbsNav link={link} categoryName={name} itemName={data.name} />
         <div className={classes.detailContainer}>
            <div className={classes.imgWrap}>
               <img
                  src={`https://starwars-visualguide.com/assets/img/${nameCategory}/${data.id}.jpg`}
                  alt=""
                  className={classes.img}
               />
               <div className={classes.errorImage}></div>
            </div>

            <div className={classes.detailInfo}>
               <h1>{data.name}</h1>

               {nameCategory === "starships" ? (
                  <div>
                     <p>Модель: {data.model}</p>
                     <p>Производитель: {data.manufacturer}</p>
                     <p>Длина: {data.length}m</p>
                     <p>Экипаж: {data.crew}</p>
                     <p>Пассажиры: {data.passengers}</p>
                     <p>Грузоподъемность: {data.cargoCapicity} тонн</p>
                  </div>
               ) : null}

               {nameCategory === "planets" ? (
                  <div>
                     <p>Популяция: {data.population}</p>
                     <p>Период вращения: {data.rotationPeriod} дней</p>
                     <p>Диаметр: {data.diameter}km</p>
                     <p>Климат: {data.climate}</p>
                  </div>
               ) : null}

               {nameCategory === "characters" ? (
                  <div>
                     <p>Пол: {data.gender}</p>
                     <p>Дата рождения: {data.birthYear}</p>
                     <p>Цвет глаз: {data.eyeColor}</p>
                     <p>Рост: {data.height}cm</p>
                     <p>Вес: {data.mass}kg</p>
                     <p>Цвет волос: {data.hairColor}</p>
                  </div>
               ) : null}
            </div>
         </div>
      </>
   );
};

export default ItemDetail;
