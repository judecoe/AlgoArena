import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { Dashboard } from "./components";

function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
