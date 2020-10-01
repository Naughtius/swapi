import { SEARCH_TERM, FETCH_SEARCH_ITEMS } from "../actions/actionTypes";

const initialState = {
   term: "",
   fetchedSearchItems: [],
};

export default function searchReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_SEARCH_ITEMS:
         return {
            ...state,
            fetchedSearchItems: action.fetchedSearchItems,
         };
      case SEARCH_TERM:
         return {
            ...state,
            term: action.term,
         };
      default:
         return state;
   }
}
