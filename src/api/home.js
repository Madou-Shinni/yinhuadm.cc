import useRequest from "../hooks/useRequest/useRequest.js";

export const getHome = (params) => {
    return useRequest({
        url: "/video/home",
        method: "get",
        params
    })
}