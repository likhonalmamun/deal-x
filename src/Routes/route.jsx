import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <PrivateRoute>
            <AllSellers></AllSellers>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
