import React from "react";
import Layout from "../hoc/Layout";
import { useRoutes } from "../routes";

const App = () => {
   const routes = useRoutes();

   return <Layout>{routes}</Layout>;
};

export default App;
