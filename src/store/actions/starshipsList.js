import SwapiService from "../../services/swapiService";

import { FETCH_STARSHIPS_LIST, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchStarshipsList() {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getAllStarships()
         .then((response) => {
            dispatch(fetchStarshipsListSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchStarshipsListSuccess(data) {
   return {
      type: FETCH_STARSHIPS_LIST,
      fetchedStarshipsList: data,
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
