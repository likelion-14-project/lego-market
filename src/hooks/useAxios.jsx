import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://146.56.183.55:5050";
// axios.defaults.baseURL = "https://mandarin.api.weniv.co.kr";
axios.defaults.headers["content-Type"] = "application/json";

axios.interceptors.request.use(
    function (config) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            "token"
        )}`;
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

    useEffect(() => {
        getData(axiosParams);
    }, [refetch]);

    return { error, isPending, response, callRefetch, getData };
};
