import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PeoplesPage from "./pages/PeoplesPage";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import PeopleDetailPage from "./pages/PeopleDetailPage";
import PlanetDetailPage from "./pages/PlanetDetailPage";
import StarshipDetailPage from "./pages/StarshipDetailPage";

export const useRoutes = () => {
   return (
      <Switch>
         <Route path="/" exact>
            <MainPage />
         </Route>
         <Route path="/peoples" exact>
            <PeoplesPage />
         </Route>
         <Route path="/planets" exact>
            <PlanetsPage />
         </Route>
         <Route path="/starships" exact>
            <StarshipsPage />
         </Route>
         <Route path="/peoples/:id">
            <PeopleDetailPage />
         </Route>
         <Route path="/planets/:id">
            <PlanetDetailPage />
         </Route>
         <Route path="/starships/:id">
            <StarshipDetailPage />
         </Route>
         <Redirect to="/" />
      </Switch>
   );
};
