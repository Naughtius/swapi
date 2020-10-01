import { combineReducers } from "redux";
import peoplesListReducer from "./peoplesListReducer";
import planetsListReducer from "./planetsListReducer";
import starshipsListReducer from "./starshipsListReducer";
import appReducer from "./appReducer";
import peopleDetailReducer from "./peopleDetailReducer";
import planetDetailReducer from "./planetDetailReducer";
import starshipDetailReducer from "./starshipDetailReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
   peoplesList: peoplesListReducer,
   planetsList: planetsListReducer,
   starshipsList: starshipsListReducer,
   app: appReducer,
   peopleDetail: peopleDetailReducer,
   planetDetail: planetDetailReducer,
   starshipDetail: starshipDetailReducer,
   search: searchReducer,
});
