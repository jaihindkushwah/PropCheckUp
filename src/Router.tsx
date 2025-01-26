import { RouteObject, useRoutes } from "react-router-dom";
import { Home } from "./features/home";
function Router() {
  const root: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return useRoutes(root);
}

export default Router;
