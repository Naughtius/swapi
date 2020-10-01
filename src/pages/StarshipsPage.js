import React, { useEffect } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarshipsList } from "../store/actions/starshipsList";

const StarshipsPage = () => {
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const starships = useSelector(
      (state) => state.starshipsList.fetchedStarshipsList
   );

   useEffect(() => {
      dispatch(fetchStarshipsList());
   }, [dispatch]);

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
