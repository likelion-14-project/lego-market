export const checkToken = () => {
    if (localStorage.getItem("token")) {
        return true;
    } else {
        return false;
    }
};
