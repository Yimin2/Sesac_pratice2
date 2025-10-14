import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom"
import axios from "axios";

function Posts(props) {
    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({})

    const order = searchParams.get("order") ?? "asc"
    const sortBy = searchParams.get("sortBy") ?? "id"
    const skip = searchParams.get("skip") ?? 0
    const limit = searchParams.get("limit") ?? 5
    useEffect(() => {
        async function getPosts() {
            const response = await axios.get(`https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`)
            setPosts(response.data.posts)
        }

        getPosts()
    }, [searchParams]);

    return (<div>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "asc", sortBy: "id"}))}>id 오름차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "desc", sortBy: "id"}))}>id 내림차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "asc", sortBy: "title"}))}>제목 오름차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "desc", sortBy: "title"}))}>제목 내림차순
        </button>
        <br/>
        {posts.map(post => (<Link key={post.id}
                                  to={`/dummy/posts/${post.id}`}>
            No.{post.id} - {post.title}
            <br/>
        </Link>))}
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({skip: Number(skip) - 5}))}>이전
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({skip: Number(skip) + 5}))}>다음
        </button>
    </div>);
}

export default Posts;