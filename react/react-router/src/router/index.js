import {createBrowserRouter} from "react-router-dom";

import RootLayout from "../layouts/RootLayout.jsx";
import DummyLayout from "../layouts/DummyLayout.jsx";

import Home from "../pages/RootPages/Home.jsx";
import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";


const router = createBrowserRouter([{
    path: "/", Component: RootLayout, children: [{index: true, Component: Home}]
}, {
    path: "/dummy", Component: DummyLayout, children: [{
        path: "carts",
        Component: Carts
    }, {
        path: "posts",
        Component: Posts
    }, {
        path: "products",
        Component: Products
    }]
}
]);

export default router;
