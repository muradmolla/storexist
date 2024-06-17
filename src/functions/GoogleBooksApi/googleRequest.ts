const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json;charset=UTF-8'
}

const fetchGoogleRequest = async <TResponse>(
  endpoint: string,
  params: URLSearchParams = new URLSearchParams(),
  config: RequestInit = {}
): Promise<TResponse> => {
  const newConfig = config
  const newParams = params
  return fetch(
    `https://www.googleapis.com/books/v1/${endpoint}?${newParams.toString()}`,
    newConfig
  )
    .then((response) => response.json())
    .then((data) => {
      return data as TResponse
    })
}

const googleRequest = {
  get: <TResponse>(url: string, params?: URLSearchParams) =>
    fetchGoogleRequest<TResponse>(url, params, { headers: defaultHeaders }),
  post: <TBody extends BodyInit, TResponse>(
    url: string,
    body: TBody,
    params?: URLSearchParams
  ) =>
    fetchGoogleRequest<TResponse>(url, params, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: defaultHeaders
    }),
  put: <TBody extends BodyInit, TResponse>(
    url: string,
    body: TBody,
    params?: URLSearchParams
  ) =>
    fetchGoogleRequest<TResponse>(url, params, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: defaultHeaders
    }),
  delete: <TResponse>(url: string, params?: URLSearchParams) =>
    fetchGoogleRequest<TResponse>(url, params, {
      method: 'DELETE',
      headers: defaultHeaders
    })
}

export enum ERequestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export default googleRequest
