import React from 'react';
import {Link, Outlet} from "react-router-dom";

function DummyLayout(props) {
    const baseClass = "m-2"

    return (<div>
        <div className="border-2 p-2">
            <Link className={baseClass}
                  to="/">home</Link>
            <Link className={baseClass}
                  to="/dummy/carts">carts</Link>
            <Link className={baseClass}
                  to="/dummy/posts">posts</Link>
            <Link className={baseClass}
                  to="/dummy/products">products</Link>
        </div>
        <Outlet/>
    </div>);
}

export default DummyLayout;