import React, { useEffect, useState } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import ItemList from "../components/ItemList";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

const PeoplesPage = () => {
   const [peoples, setPeoples] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [didMount, setDidMount] = useState(false);

   useEffect(() => {
      const swapiService = new SwapiService();

      let unmounted = false;
      setDidMount(true);

      swapiService
         .getAllPerson()
         .then((response) => {
            if (!unmounted) {
               setDidMount(false);
               setPeoples(response);
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
      <ItemList data={peoples} name="characters" link="peoples" />
   );
   return (
      <>
         <BreadcrumbsNav categoryName="Персонажи" />
         {content}
      </>
   );
};

export default PeoplesPage;
