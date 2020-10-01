import { TOGGLE_MENU } from "./actionTypes";

export function toggleMenuHandler(value) {
   return (dispatch) => {
      dispatch(toggleMenu(!value));
   };
}

export function toggleMenu(value) {
   return {
      type: TOGGLE_MENU,
      openMenu: value,
   };
}
