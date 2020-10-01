import SwapiService from "../../services/swapiService";

import { FETCH_PLANETS_LIST, SHOW_LOADER, FETCH_ERROR } from "./actionTypes";

export function fetchPlanetsList() {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getAllPlanets()
         .then((response) => {
            dispatch(fetchPlanetsListSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function fetchPlanetsListSuccess(data) {
   return {
      type: FETCH_PLANETS_LIST,
      fetchedPlanetsLists: data,
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
