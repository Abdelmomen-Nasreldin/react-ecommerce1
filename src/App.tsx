import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register.tsx/Register";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import ProductDetails from './pages/ProductDetails/productDetails';
import NotFound from "./pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthContext/auth";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <MainLayout />, children: [
        { path: "", element: <Home />, },
        { path: "home", element: <Navigate to={'/'} /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "products", element: <Products /> },
        { path: "productDetails/:id", element: <ProductDetails /> },
        { path: "categories", element: <Categories /> },
        {
          path: "brands", element: <ProtectedRoutes>
            <Brands />
          </ProtectedRoutes>
        },
        {
          path: "cart", element: <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>;
}

export default App;
