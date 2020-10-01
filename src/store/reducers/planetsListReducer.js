import { FETCH_PLANETS_LIST } from "../actions/actionTypes";

const initialState = {
   fetchedPlanetsLists: [],
};

export default function peoplesListReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_PLANETS_LIST:
         return {
            ...state,
            fetchedPlanetsLists: action.fetchedPlanetsLists,
         };
      default:
         return state;
   }
}
