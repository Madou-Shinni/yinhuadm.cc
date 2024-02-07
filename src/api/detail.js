import useRequest from "../hooks/useRequest/useRequest.js";

export const getVideo = (params) => {
    return useRequest({
        url: "/video",
        method: "get",
        params
    })
}