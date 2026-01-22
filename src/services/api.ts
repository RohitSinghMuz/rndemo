import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Generic type for API call parameters
export interface ApiCallParams<Req = any, Res = any> {
  endpoint: string;
  method?: Method;
  data?: Req;                      // request body
  params?: Record<string, any>;    // query params
  headers?: Record<string, string>;
}

// Main API function
export const callApi = async <Req = any, Res = any>({
  endpoint,
  method = 'GET',
  data,
  params = {},
  headers = {},
}: ApiCallParams<Req, Res>): Promise<Res> => {
  try {
    const config: AxiosRequestConfig = { url: endpoint, method, data, params, headers };
    const response: AxiosResponse<Res> = await apiClient(config);
    return response.data;
  } catch (error: any) {
    console.error(`[API ERROR] ${method} ${endpoint}:`, error.response?.data || error.message);
    throw error;
  }
};

// ✅ Convenience wrappers

export const getApi = <Res = any>(
  endpoint: string,
  params?: Record<string, any>,
  headers?: Record<string, string>
) => callApi<undefined, Res>({ endpoint, method: 'GET', params, headers });

export const postApi = <Req = any, Res = any>(
  endpoint: string,
  data?: Req,
  headers?: Record<string, string>
) => callApi<Req, Res>({ endpoint, method: 'POST', data, headers });

export const putApi = <Req = any, Res = any>(
  endpoint: string,
  data?: Req,
  headers?: Record<string, string>
) => callApi<Req, Res>({ endpoint, method: 'PUT', data, headers });

export const patchApi = <Req = any, Res = any>(
  endpoint: string,
  data?: Req,
  headers?: Record<string, string>
) => callApi<Req, Res>({ endpoint, method: 'PATCH', data, headers });

export const deleteApi = <Res = any>(
  endpoint: string,
  headers?: Record<string, string>
) => callApi<undefined, Res>({ endpoint, method: 'DELETE', headers });
