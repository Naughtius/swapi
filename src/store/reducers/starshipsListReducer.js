import { FETCH_STARSHIPS_LIST } from "../actions/actionTypes";

const initialState = {
   fetchedStarshipsList: [],
};

export default function peoplesListReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_STARSHIPS_LIST:
         return {
            ...state,
            fetchedStarshipsList: action.fetchedStarshipsList,
         };
      default:
         return state;
   }
}
