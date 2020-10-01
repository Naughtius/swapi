import React, { useEffect } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetsList } from "../store/actions/planetsList";

const PlanetsPage = () => {
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const planets = useSelector(
      (state) => state.planetsList.fetchedPlanetsLists
   );

   useEffect(() => {
      dispatch(fetchPlanetsList());
   }, [dispatch]);

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
