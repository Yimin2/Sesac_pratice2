import {createBrowserRouter} from "react-router-dom";

import RootLayout from "../layouts/RootLayout.jsx";
import DummyLayout from "../layouts/DummyLayout.jsx";

import Home from "../pages/RootPages/Home.jsx";
import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";
import PostDetail from "../pages/DummyPages/PostDetail.jsx";
import ProductDetail from "../pages/DummyPages/ProductDetail.jsx";
import PATHS from "../constants/paths";


const router = createBrowserRouter([{
    path: PATHS.ROOT.INDEX, Component: RootLayout, children: [{index: true, Component: Home}]
}, {
    path: PATHS.DUMMY.INDEX, Component: DummyLayout, children: [{
        path: "carts", Component: Carts
    }, {
        path: "posts", Component: Posts
    }, {
        path: "posts/:postId", Component: PostDetail
    }, {
        path: "products", Component: Products
    }, {
        path: "products/:productId", Component: ProductDetail
    }]
}]);

export default router;
