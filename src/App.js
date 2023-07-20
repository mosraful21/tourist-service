import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AllTouristPlaces from "./pages/AllTouristPlaces/AllTouristPlaces";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./components/Footer/ErrorPage";
import TourAdviceDetails from "./pages/Home/TourAdvice/TourAdviceDetails";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          path: "/place/:id",
          element: <PlaceDetails />,
        },
        {
          path: "/advice/:id",
          element: <TourAdviceDetails/>
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        }
      ],
    },
    {
      path: '*',
      element: <ErrorPage/>
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
