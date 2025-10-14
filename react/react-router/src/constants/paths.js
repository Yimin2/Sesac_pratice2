const PATHS = {
    // RootLayout을 사용하는 경로
    ROOT: {
        INDEX: "/",
        ABOUT: "/about",
    },

    // DummyLayout을 사용하는 경로
    DUMMY: {
        INDEX: "/dummy",
        POSTS: "/dummy/posts",
        PRODUCTS: "/dummy/products",

        // 동적 경로
        // 라우터 정의에 사용되는 문자열 패턴
        POST_DETAIL: "/dummy/posts/:postId",

        // Link 컴포넌트와 useNavigate() 훅에서 사용하는 함수
        getPostDetailPath: (postId) => `/dummy/posts/${postId}`,
    },
};

export default PATHS;