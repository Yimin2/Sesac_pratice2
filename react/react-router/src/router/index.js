import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products.jsx";
import Carts from "../pages/Carts.jsx";
import Posts from "../pages/Posts.jsx";

const router = createBrowserRouter([{
    path: "/", Component: Home,
}, {
    path: "/dummy/products", Component: Products,
}, {
    path: "/dummy/carts", Component: Carts,
}, {
    path: "/dummy/posts", Component: Posts,
},

]);

export default router;
