import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import ProductDetails from './pages/ProductDetails/productDetails';
import NotFound from "./pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthContext/auth";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginRoutes from "./components/ProtectedRoutes/LoginRoute";
import CartProvider from "./contexts/AuthContext/cart";

const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <MainLayout />, children: [
        { path: "", element:<ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: "home", element: <Navigate to={'/'} /> },
        {
          path: "login", element: <LoginRoutes>
            <Login />
          </LoginRoutes>
        },
        {
          path: "register", element: <LoginRoutes>

            <Register />
          </LoginRoutes>
        },
        { path: "products", element: <ProtectedRoutes> <Products /></ProtectedRoutes>  },
        { path: "productDetails/:id", element: <ProtectedRoutes> <ProductDetails /></ProtectedRoutes>  },
        { path: "categories", element: <ProtectedRoutes> <Categories /></ProtectedRoutes>  },
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
    <CartProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </CartProvider>
  </>;
}

export default App;
