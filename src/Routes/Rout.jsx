import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/AddToys/AddToys";
import MyToy from "../Pages/MyToys/MyToy";
import UpdateToy from "../Pages/Update/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>,
        loader: () => fetch("http://localhost:5000/newtoy"),
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
