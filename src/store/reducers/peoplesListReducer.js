import { FETCH_PEOPLES_LIST } from "../actions/actionTypes";

const initialState = {
   fetchedPeopleLists: [],
};

export default function peoplesListReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_PEOPLES_LIST:
         return {
            ...state,
            fetchedPeopleLists: action.fetchedPeopleLists,
         };
      default:
         return state;
   }
}
