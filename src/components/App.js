import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../hoc/Layout";
import { useRoutes } from "../routes";

const App = () => {
   const routes = useRoutes();

   return (
      <BrowserRouter>
         <Layout>{routes}</Layout>
      </BrowserRouter>
   );
};

export default App;
