import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import axios from "axios";

function PostDetail(props) {
    const [post, setPost] = useState({})
    const { postId } = useParams()

    useEffect(() => {
        async function getPost() {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}`)
            setPost(response.data)
        }
        getPost()
    }, [postId]);

    return (<div>
        {post.body}
    </div>);
}

export default PostDetail;