import useSWR from 'swr';
import AxiosInstance from '@/hooks/useRequest/axiosInstance';

function useRequest(request, config) {
  const {
    data: response,
    error,
    mutate,
    isValidating,
    isLoading
  } = useSWR(request.url, () => AxiosInstance.request(request), config);

  return {
    data: response?.data,
    response,
    error,
    mutate,
    isValidating,
    isLoading
  };
}

export default useRequest;
