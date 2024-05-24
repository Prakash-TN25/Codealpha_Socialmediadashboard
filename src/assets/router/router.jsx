import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import { Follower } from "../../pages/Follower";
import { NewFollower } from "../../pages/NewFollower";
import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children : [
        {
            path: "",
            element: <Home />,
          },
          {
            path: "/follower",
            element: <Follower />,
          },
          {
            path: "/newfollower",
            element: <NewFollower />,
          },
    ]
  },
  
]);

export default router;
