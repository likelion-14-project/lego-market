import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [profile, setProfile] = useState();
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

            const json = await response.json();

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
            console.log("프로필정보를 받아오는 과정에서 에러가 발생했습니다.");
            setError(error);
            setIsPending(false);
            console.log(error);
        }
    };

    return { error, isPending, getProfile, profile, isUpdate, setIsUpdate };
};
