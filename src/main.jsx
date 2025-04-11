import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Privacidad from './components/privacidad.jsx';
import LaburosTuc from './components/LaburosTuc.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacidad",
    element: <Privacidad />,
  },
  {
    path: "/privacidad/laburostuc",
    element: <LaburosTuc />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
