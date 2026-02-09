import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import MainLayout from "./layout/MainLayout";
import Products from "./components/products/Products";
import DashboardLayout from './layout/DashboardLayout';
import About from './pages/about/About';
import Users from "./pages/users/Users";
import User from "./components/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <User />,
      }
    ]
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ]
  }
]);

export default router;
