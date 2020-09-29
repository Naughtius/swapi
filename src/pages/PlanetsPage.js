import React, { useEffect, useState } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

const PlanetsPage = () => {
   const [planets, setPlanets] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService
         .getAllPlanets()
         .then((response) => {
            setPlanets(response);
            setLoading(false);
         })
         .catch(() => {
            setError(true);
         });
   }, []);

   if (error) {
      return <ErrorIndicator />;
   }

   const content = loading ? (
      <Loader />
   ) : (
      <ItemList data={planets} name="planets" link="planets" />
   );

   return (
      <>
         <BreadcrumbsNav categoryName="Планеты" />
         {content}
      </>
   );
};

export default PlanetsPage;
