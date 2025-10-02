import React, {useEffect, useState} from 'react';
import axios from "axios";

function Comment({commentId}) {

    const [comment, setComment] = useState([])

    async function getCommentById(id) {
        const data = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
        setComment(data.data.comments)
    }

    useEffect(() => {
        getCommentById(commentId)
    }, [commentId]);

    return (<div>
        {comment.map((e) => (
            <div key={e.id} className="shadow m-2">
                <p>{e.body}</p>
                <p>{e.user.username}</p>
                <p>{e.likes}</p>
            </div>
        ))}
    </div>);
}

export default Comment;