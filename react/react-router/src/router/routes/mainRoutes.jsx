import RootLayout from "../../layouts/RootLayout.jsx";
import DummyLayout from "../../layouts/DummyLayout.jsx";
import Carts from "../../pages/DummyPages/Carts.jsx";
import Posts from "../../pages/DummyPages/Posts.jsx";
import PostDetail from "../../pages/DummyPages/PostDetail.jsx";
import Products from "../../pages/DummyPages/Products.jsx";
import ProductDetail from "../../pages/DummyPages/ProductDetail.jsx";
import PATHS from "../../constants/paths.js";
import Home from "../../pages/RootPages/Home.jsx";

const mainRoutes = [
    {
    path: PATHS.ROOT.INDEX, Component: RootLayout, children: [{index: true, Component: Home}]
}, {
    path: PATHS.DUMMY.INDEX, Component: DummyLayout, children: [{
        path: PATHS.DUMMY.CARTS, Component: Carts
    }, {
        path: PATHS.DUMMY.POSTS, Component: Posts
    }, {
        path: PATHS.DUMMY.POST_DETAIL, Component: PostDetail
    }, {
        path: PATHS.DUMMY.PRODUCTS, Component: Products
    }, {
        path: PATHS.DUMMY.PRODUCT_DETAIL, Component: ProductDetail
    }]
}];

export default mainRoutes;
