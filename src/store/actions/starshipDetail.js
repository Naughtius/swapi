import SwapiService from "../../services/swapiService";

import { FETCH_STARSHIP_DETAIL, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchStarshipDetail(id) {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getStarship(id)
         .then((response) => {
            dispatch(fetchStarshipDetailSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchStarshipDetailSuccess(data) {
   return {
      type: FETCH_STARSHIP_DETAIL,
      fetchedStarshipDetail: data,
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
