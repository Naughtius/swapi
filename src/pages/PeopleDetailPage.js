import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";
import ErrorIndicator from "../components/ErrorIndicator";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleDetail } from "../store/actions/peopleDetail";

const PeopleDetailPage = () => {
   const linkId = useParams().id;
   const dispatch = useDispatch();

   const loading = useSelector((state) => state.app.loading);
   const error = useSelector((state) => state.app.error);
   const people = useSelector(
      (state) => state.peopleDetail.fetchedPeopleDetail
   );

   useEffect(() => {
      dispatch(fetchPeopleDetail(linkId));
   }, [linkId, dispatch]);

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
