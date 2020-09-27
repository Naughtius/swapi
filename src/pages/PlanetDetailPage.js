import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import ItemDetail from "../components/ItemDetail";

const PlanetDetailPage = () => {
   const linkId = useParams().id;
   const [planet, setPLanet] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService.getPlanet(linkId).then((response) => {
         setPLanet(response);
         setLoading(false);
      });
   }, [linkId]);

   const content = loading ? (
      <Loader />
   ) : (
      <ItemDetail
         data={planet}
         nameCategory="planets"
         name="Планеты"
         link="planets"
      />
   );

   return content;
};

export default PlanetDetailPage;
