import SwapiService from "../../services/swapiService";

import { FETCH_PLANET_DETAIL, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchPlanetDetail(id) {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getPerson(id)
         .then((response) => {
            dispatch(fetchPlanetDetailSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchPlanetDetailSuccess(data) {
   return {
      type: FETCH_PLANET_DETAIL,
      fetchedPlanetDetail: data,
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
