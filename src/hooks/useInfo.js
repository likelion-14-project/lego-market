import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useInfo = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch, user } = useAuthContext();

    const myinfo = async () => {
        try {
            setError(null);
            setIsPending(true);

            const token = localStorage.getItem("token");
            const url = "https://mandarin.api.weniv.co.kr/user/myinfo";
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            const json = await response.json();
            console.log("json : ", json);
            if (json.user) {
                dispatch({ type: "login", payload: json.user });
                setError(null);
                setIsPending(false);
                console.log("저장후 user : ", user);
            }
        } catch (error) {
            setError(error);
            setIsPending(false);
            console.log(error);
        }
    };

    return { error, isPending, myinfo };
};
