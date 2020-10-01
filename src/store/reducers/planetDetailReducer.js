import { FETCH_PLANET_DETAIL } from "../actions/actionTypes";

const initialState = {
   fetchedPlanetDetail: [],
};

export default function peopleDetailReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_PLANET_DETAIL:
         return {
            ...state,
            fetchedPlanetDetail: action.fetchedPlanetDetail,
         };
      default:
         return state;
   }
}
