import SwapiService from "../../services/swapiService";

import { FETCH_PEOPLE_DETAIL, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchPeopleDetail(id) {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getPerson(id)
         .then((response) => {
            dispatch(fetchPeopleDetailSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchPeopleDetailSuccess(data) {
   return {
      type: FETCH_PEOPLE_DETAIL,
      fetchedPeopleDetail: data,
   };
}

export function showLoader(loading) {
   return {
      type: SHOW_LOADER,
      loading,
   };
}

export function fetchError(error) {
   return {
      type: FETCH_ERROR,
      error,
   };
}
