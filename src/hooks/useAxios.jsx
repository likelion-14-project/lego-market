import axios from "axios";
// baseURL 설정
axios.defaults.baseURL = "https://mandarin.api.weniv.co.kr";
axios.defaults.headers["content-Type"] = "application/json";
// 요청하기전에 헤더에 토큰 추가
axios.interceptors.request.use(
    function (config) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 팔로우한 게시글 불러오기
export const getFeedPost = async () => {
    const config = {
        method: "GET",
        url: `/post/feed`,
    };
    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
    }
};
// 사용자 검색
export const searchUser = async (keyword) => {
    const config = {
        method: "GET",
        url: `/user/searchuser/`,
        params: {
            keyword: keyword === "" ? false : keyword,
        },
    };
    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
// 좋아요 추가
export const addLikeCall = async (postId) => {
    const config = {
        method: "POST",
        url: `/post/${postId}/heart`,
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
// 좋아요 취소
export const cancelLikeCall = async (postId) => {
    const config = {
        method: "DELETE",
        url: `/post/${postId}/unheart`,
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
// 게시글 상세정보 요청
export const getPostInfo = async (postId) => {
    const config = {
        method: "GET",
        url: `/post/${postId}/`,
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
// 게시글 삭제요청
export const deletePost = async (postId) => {
    const config = {
        method: "DELETE",
        url: `/post/${postId}/`,
    };
    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        return error;
    }
};
// Profile 의 유저 게시글을 요청
export const getProfilePost = async (accountName) => {
    const config = {
        method: "GET",
        url: `/post/${accountName}/userpost`,
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
};
