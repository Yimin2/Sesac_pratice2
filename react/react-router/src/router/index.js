import {createBrowserRouter} from "react-router-dom";
import mainRoutes from "./routes/mainRoutes.jsx";
import NotFounds from "../pages/RootPages/NotFounds.jsx";


const router = createBrowserRouter([
    ...mainRoutes,
    {
        path:"*",
        Component:NotFounds
    }
]);

export default router;
