import React, { useEffect, useState } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

const StarshipsPage = () => {
   const [starships, setStarships] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [didMount, setDidMount] = useState(false);

   useEffect(() => {
      const swapiService = new SwapiService();

      let unmounted = false;
      setDidMount(true);

      swapiService
         .getAllStarships()
         .then((response) => {
            if (!unmounted) {
               setDidMount(false);
               setStarships(response);
               setLoading(false);
            }
         })
         .catch(() => {
            setError(true);
         });

      return () => {
         unmounted = true;
      };
   }, [didMount]);

   if (error) {
      return <ErrorIndicator />;
   }

   const content = loading ? (
      <Loader />
   ) : (
      <ItemList data={starships} name="starships" link="starships" />
   );

   return (
      <>
         <BreadcrumbsNav categoryName="Техника" />
         {content}
      </>
   );
};

export default StarshipsPage;
