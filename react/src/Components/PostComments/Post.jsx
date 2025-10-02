import React, {useEffect, useState} from 'react';
import axios from "axios";
import Comment from "./Comment.jsx";

function Post(props) {

    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1)
    const [id, setId] = useState()

    async function getPostById(id) {
        const data = await axios.get(`https://dummyjson.com/posts/${id}`)
        setPost(data.data)
    }


    useEffect(() => {
        getPostById(postId)
    }, [postId]);

    const handlePostId = (e) => {
        e.preventDefault()
        setPostId(id)
    }


    return (<div>
        <div className="flex">
            <span className="mx-2">글 번호</span>
            <form onSubmit={(e) => {
                handlePostId(e)
            }}>
                <input type="text"
                       className="border-2"
                       onChange={(e) => {
                           setId(e.target.value)
                       }}/>
                <button type="submit" className="mx-2 border-2 bg-blue-600 px-2  py-1 text-white">검색</button>
            </form>
        </div>
        <div className="border-2 shadow m-2">
            <p className="m-4 text-3xl">No.{post.id} {post.title} </p>
            <p className="m-4">{post.body}</p>
            <p className="mx-4 text-gray-600"> userId: {post.userId}</p>
            <p className="mx-4 mb-4 text-gray-600">views: {post.views}</p>
        </div>
        <Comment commentId={postId}/>
    </div>);
}

export default Post;