import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";
import ErrorIndicator from "../components/ErrorIndicator";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetDetail } from "../store/actions/planetDetail";

const PlanetDetailPage = () => {
   const linkId = useParams().id;
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const planet = useSelector(
      (state) => state.planetDetail.fetchedPlanetDetail
   );

   useEffect(() => {
      dispatch(fetchPlanetDetail(linkId));
   }, [linkId, dispatch]);

   if (error) {
      return <ErrorIndicator />;
   }

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
