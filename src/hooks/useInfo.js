import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useInfo = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

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
            console.log("json : ", json.user);
            if (json.user) {
                dispatch({ type: "login", payload: json.user });
                setError(null);
                setIsPending(false);
            } else {
                setError(json.message);
                setIsPending(false);
                throw Error(json.message);
            }
        } catch (error) {
            setError(error);
            setIsPending(false);
            console.log(error);
        }
    };

    return { error, isPending, myinfo };
};
