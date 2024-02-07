import useRequest from "../hooks/useRequest/useRequest.js";

export const getPlay = (params) => {
    return useRequest({
        url: "/video/play",
        method: "get",
        params
    })
}