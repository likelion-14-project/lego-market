import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useProfile = (accountname) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();

    const getProfile = async (accountname) => {
        if (accountname === undefined) {
            return;
        }

        try {
            setError(null);
            setIsPending(true);

            const url =
                "https://mandarin.api.weniv.co.kr/profile/" + accountname;

            const token = localStorage.getItem("token");

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            console.log("response : ", response);

            const json = await response.json();

            console.log("json :", json);

            if (json.profile) {
                setError(null);
                setIsPending(false);
                setProfile(json.profile);
            } else {
                setIsPending(false);
                navigate("/notfound", { replace: true });
                throw Error(json.message);
            }
        } catch (error) {
            console.log("에러지롱");
            setError(error);
            setIsPending(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getProfile(accountname);
    }, [accountname]);

    return { error, isPending, getProfile, profile };
};
