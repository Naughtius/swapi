import { FETCH_PEOPLE_DETAIL } from "../actions/actionTypes";

const initialState = {
   fetchedPeopleDetail: [],
};

export default function peopleDetailReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_PEOPLE_DETAIL:
         return {
            ...state,
            fetchedPeopleDetail: action.fetchedPeopleDetail,
         };
      default:
         return state;
   }
}
