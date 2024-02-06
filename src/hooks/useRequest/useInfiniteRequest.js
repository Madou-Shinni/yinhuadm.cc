import useSWRInfinite from "swr/infinite";
import AxiosInstance from "./axiosInstance.js";

function getKey(pageIndex, url) {
    return `${url}?pageIndex=${pageIndex + 1}`;
}

function useInfiniteRequest(request, config) {
    const {
        data: response,
        error,
        isValidating,
        mutate,
        size,
        setSize,
        isLoading
    } = useSWRInfinite(
            (pageIndex) => getKey(pageIndex, request.url),
            (url) => AxiosInstance.request({ url }),
            { ...config, revalidateFirstPage: false }
        )

    return {
        data: response?.map((item) => item.data),
        response,
        mutate,
        error,
        isValidating,
        size,
        setSize,
        isLoading
    };
}

export default useInfiniteRequest;