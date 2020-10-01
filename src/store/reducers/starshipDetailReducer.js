import { FETCH_STARSHIP_DETAIL } from "../actions/actionTypes";

const initialState = {
   fetchedStarshipDetail: [],
};

export default function starshipDetailReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_STARSHIP_DETAIL:
         return {
            ...state,
            fetchedStarshipDetail: action.fetchedStarshipDetail,
         };
      default:
         return state;
   }
}
