import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import SwapiService from "../services/swapiService";
import ItemDetail from "../components/ItemDetail";
import ErrorIndicator from "../components/ErrorIndicator";

const PeopleDetailPage = () => {
   const linkId = useParams().id;
   const [people, setPeople] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService
         .getPerson(linkId)
         .then((response) => {
            setPeople(response);
            setLoading(false);
         })
         .catch(() => {
            setError(true);
         });
   }, [linkId]);

   if (error) {
      return <ErrorIndicator />;
   }

   const content = loading ? (
      <Loader />
   ) : (
      <ItemDetail
         data={people}
         nameCategory="characters"
         name="Персонажи"
         link="peoples"
      />
   );

   return content;
};

export default PeopleDetailPage;
