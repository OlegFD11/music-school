import React from "react";
import Layout from "./hoc/Layout/Layout";
import { useRoutes } from "./router";

function App() {
  const routes = useRoutes(true);

  return <Layout>{routes}</Layout>;
}

export default App;
