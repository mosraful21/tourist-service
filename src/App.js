import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
      ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
