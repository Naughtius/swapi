import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import ItemDetail from "../components/ItemDetail";

const StarshipDetailPage = () => {
   const linkId = useParams().id;
   const [starship, setStarship] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService.getStarship(linkId).then((response) => {
         console.log(response);
         setStarship(response);
         setLoading(false);
      });
   }, [linkId]);

   const content = loading ? (
      <Loader />
   ) : (
      <ItemDetail
         data={starship}
         nameCategory="starships"
         name="Техника"
         link="starships"
      />
   );

   return content;
};

export default StarshipDetailPage;
