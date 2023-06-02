import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AllTouristPlaces from "./pages/AllTouristPlaces/AllTouristPlaces";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/places",
          element: <AllTouristPlaces />,
        },
        {
          path: "/details/:id",
          element: <PlaceDetails />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
