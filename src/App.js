import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AllTouristPlaces from "./pages/AllTouristPlaces/AllTouristPlaces";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";

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
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/posts/post/:id",
          element: <Post />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
