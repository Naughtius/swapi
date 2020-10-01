import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";
import ErrorIndicator from "../components/ErrorIndicator";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarshipDetail } from "../store/actions/starshipDetail";

const StarshipDetailPage = () => {
   const linkId = useParams().id;
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const starship = useSelector(
      (state) => state.starshipDetail.fetchedStarshipDetail
   );

   useEffect(() => {
      dispatch(fetchStarshipDetail(linkId));
   }, [linkId, dispatch]);

   if (error) {
      return <ErrorIndicator />;
   }

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
