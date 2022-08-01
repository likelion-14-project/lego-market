import React, { useState, useEffect, useCallback } from "react";

const useInfinite = (skipNum, post_id, type) => {
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //query API 요청 보내기
    async function getData() {
        // let url;
        // if (type === "comments") {
        //     url = `https://mandarin.api.weniv.co.kr/post/${post_id}/comments/?limit=${10}&skip=${skipNum}`;
        // } else if (type === "posts") {
        //     url = `https://mandarin.api.weniv.co.kr/post/feed/?limit=${10}&skip=${skipNum}`;
        // }
        const url = `https://mandarin.api.weniv.co.kr/post/${post_id}/comments/?limit=${10}&skip=${skipNum}`;
        const token = localStorage.getItem("token");

        try {
            setIsLoading(true);
            const res = await fetch(url, {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            const json = await res.json();
            // let data;
            // if (type === "comments") {
            //     data = json.comments;
            // } else if (type === "posts") {
            //     data = json.posts;
            // }

            // console.log("data: ", data);
            const comments = json.comments;

            setList((prev) => [...new Set([...prev, ...comments])]);
            setHasMore(comments.length > 0);
            setIsLoading(false);

            return json;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [skipNum]);

    return { hasMore, list, isLoading };
};
export default useInfinite;
