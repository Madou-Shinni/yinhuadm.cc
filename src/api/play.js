import useRequest from "../hooks/useRequest/useRequest.js";
import AxiosInstance from "@/hooks/useRequest/axiosInstance.js";

export const getPlay = (params) => {
    return useRequest({
        url: "/video/play",
        method: "get",
        params
    })
}

export const updatePlay = (data) => {
    return AxiosInstance({
        url: "/video/play",
        method: "put",
        data
    })
}
