import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Product = lazy(() => import("../views/Product.js"));
const ProductAdd = lazy(() => import("../views/ProductAdd.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/product", exact: true, element: <Product /> },
      { path: "/product/add", exact: true, element: <ProductAdd /> },
    ],
  },
];

export default ThemeRoutes;
