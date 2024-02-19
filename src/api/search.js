import useInfiniteRequest from "../hooks/useRequest/useInfiniteRequest.js";
import useRequest from "../hooks/useRequest/useRequest.js";

export const getSearch = (params) => {
    return useRequest({
        url: "/video/list",
        method: "get",
        params
    })
}

export const getSearchInfinite = (params) => {
    return useInfiniteRequest({
        url: `/video/list?keyword=${params.keyword}`,
        method: "get"
    })
}