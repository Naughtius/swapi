import React, { useEffect } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import Loader from "../components/Loader";
import ItemList from "../components/ItemList";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeoplesList } from "../store/actions/peoplesList";

const PeoplesPage = () => {
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const peoples = useSelector((state) => state.peoplesList.fetchedPeopleLists);

   useEffect(() => {
      dispatch(fetchPeoplesList());
   }, [dispatch]);

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
