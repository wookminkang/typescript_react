import { useQuery } from "@tanstack/react-query";
import axios from "./axios";

interface ReactQueryProps<T = unknown> {
  queryKey: readonly unknown[];
  queryFn: () => Promise<T>;
}

interface ApiResponse<T = unknown> {
  url: string;
  method: string;
  data: T;
}

const fetchApi = async <T = unknown>({ url, method, data }: ApiResponse<T>) => {
  const response = await axios.request<ApiResponse<T>>({
    url,
    method,
    data,
  });

  return response.data;
}


const useReactQuery = <T = unknown>({ queryKey, queryFn }: ReactQueryProps<T>) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 10,
  });

  return { data, isLoading, error, refetch };
};

export default useReactQuery;
export { fetchApi };