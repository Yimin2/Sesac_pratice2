import {useState, useEffect} from "react";
import axios from "axios";
import Post from "./Post";

export default function Container() {
    const [posts, setPosts] = useState([]); // 상품 목록 상태
    const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
    const [last, setLast] = useState()
    const LIMIT = 5; // 한 페이지에 표시할 상품 수


    useEffect(() => {
        async function fetchPosts() {
            // 적절한 요청 URL을 작성한다
            const response = await axios.get(`https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`);
            setPosts(response["data"]["posts"]);
            setLast(response.data.total)
        }

        fetchPosts();
    }, [skip]);

    const handleFirstPage = () => {
        setSkip(0)
    }
    const handleNextPage = () => {
        if(skip+6 > last) {return}
        setSkip(skip + 5)
    }
    const handlePrevPage = () => {
        if (skip === 0) {return}
        setSkip(skip - 5)
    }
    const handleLastPage = () => {
        setSkip(last-5)
    };
    // 적절한 함수를 작성한다

    return (<div className="p-4 max-w-4xl mx-auto">
        <div className="flex gap-2 mb-6">
            <button className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
                    onClick={handleFirstPage}>
                처음으로
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
                    onClick={handlePrevPage}>
                이전
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
                    onClick={handleNextPage}>
                다음
            </button>
            <button className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
                    onClick={handleLastPage}>
                마지막으로
            </button>
        </div>
        <div className="space-y-4">
            {posts.map((post) => (<Post key={post.id} post={post}/>))}
        </div>
    </div>);
}
