import { SHOW_LOADER, FETCH_ERROR, TOGGLE_MENU } from "../actions/actionTypes";

const initialState = {
   loading: true,
   error: false,
   openMenu: false,
};

export default function appReducer(state = initialState, action) {
   switch (action.type) {
      case SHOW_LOADER:
         return {
            ...state,
            loading: action.loading,
         };
      case FETCH_ERROR:
         return {
            ...state,
            error: action.error,
         };
      case TOGGLE_MENU:
         return {
            ...state,
            openMenu: action.openMenu,
         };
      default:
         return state;
   }
}
