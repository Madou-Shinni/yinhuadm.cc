import useRequest from "../hooks/useRequest/useRequest.js";

export const getSearch = (params) => {
    return useRequest({
        url: "/video/list",
        method: "get",
        params
    })
}