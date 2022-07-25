import { useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.baseURL = "http://146.56.183.55:5050";
axios.defaults.baseURL = "https://mandarin.api.weniv.co.kr";
axios.defaults.headers["content-Type"] = "application/json";

axios.interceptors.request.use(
    function (config) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const useAxios = (axiosParams) => {
    console.log(axiosParams);

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [refetch, setRefetch] = useState(0);

    const callRefetch = () => {
        setRefetch(Date.now());
    };

    const getData = async (params) => {
        if (!params) {
            return;
        }
        try {
            const response = await axios.request(params);
            console.log(response.data);
            setResponse(response);
            setIsPending(true);
        } catch (err) {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        }
    };

    const addLikeCall = async (postId) => {
        console.log('addLikeCall');
        const config = {
            method: "POST",
            url: `/post/${postId}/heart`,
        };
        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const cancelLikeCall = async (postId) => {
        console.log('cancelLikeCall');
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

    const getPostInfo = async (postId) => {
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

    useEffect(() => {
        getData(axiosParams);
    }, [refetch]);

    return {
        error,
        isPending,
        response,
        callRefetch,
        getData,
        addLikeCall,
        cancelLikeCall,
        getPostInfo,
    };
};
