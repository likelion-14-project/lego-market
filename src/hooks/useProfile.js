import { useEffect, useState } from "react";

export const useProfile = (accountname) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [profile, setProfile] = useState({});

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

            const json = await response.json();
            if (json.profile) {
                setError(null);
                setIsPending(false);
                setProfile(json.profile);
            }
        } catch (error) {
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
