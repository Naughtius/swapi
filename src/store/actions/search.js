import {
   SEARCH_TERM,
   FETCH_SEARCH_ITEMS,
   SHOW_LOADER,
   FETCH_ERROR,
} from "../actions/actionTypes";
import SwapiService from "../../services/swapiService";

export function fetchSearchItems() {
   return async (dispatch) => {
      dispatch(showLoader(true));
      dispatch(fetchError(false));

      const swapiService = new SwapiService();

      swapiService
         .getAllItems()
         .then((response) => {
            dispatch(fetchSearchItemsSuccess(response));
            dispatch(showLoader(false));
         })
         .catch(() => {
            dispatch(showLoader(false));
            dispatch(fetchError(true));
         });
   };
}

export function search(items, term) {
   return () => {
      if (term.length === 0) {
         return [];
      }

      return items.filter((item) => {
         return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
   };
}

export function searchChangeHandler(term) {
   return (dispatch) => {
      dispatch(onSearchChange(term));
   };
}

export function onSearchChange(term) {
   return {
      type: SEARCH_TERM,
      term,
   };
}

export function fetchSearchItemsSuccess(data) {
   return {
      type: FETCH_SEARCH_ITEMS,
      fetchedSearchItems: data,
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
