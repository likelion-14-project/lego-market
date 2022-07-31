import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        try {
            setError(null);
            setIsPending(true);

            const url = "https://mandarin.api.weniv.co.kr/user/login";

            const loginData = {
                user: {
                    email: email,
                    password: password,
                },
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const json = await response.json();

            if (json.user) {
                localStorage.setItem("token", json.user.token);
                dispatch({ type: "login", payload: json.user });
                setError(null);
                setIsPending(false);
                return;
            } else if (json.message) {
                setError(null);
                setIsPending(false);
                return json.message;
            }
        } catch (error) {
            setError(error);
            setIsPending(false);
            console.log(error);
        }
    };

    return { error, isPending, login };
};
