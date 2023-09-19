import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Privacidad from './components/privacidad.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/privacidad",
    element: <Privacidad />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
