import SwapiService from "../../services/swapiService";

import { FETCH_PEOPLES_LIST, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchPeoplesList() {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getAllPerson()
         .then((response) => {
            dispatch(fetchPeoplesListSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchPeoplesListSuccess(data) {
   return {
      type: FETCH_PEOPLES_LIST,
      fetchedPeopleLists: data,
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
