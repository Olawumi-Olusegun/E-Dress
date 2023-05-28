
import { Home, Cart, Product, Login  } from "./pages"

import { Header, Footer } from "./components"

import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider, ScrollRestoration  } from "react-router-dom"
import { productData } from "./api/api"

const Layout = () => {
  return <>
    <div>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
    </div>
  </>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productData,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ]
  }
])

function App() {

  return (
  <div className="font-bodyFont">
    <RouterProvider router={router} />
  </div>
  );
}

export default App
