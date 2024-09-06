import axios from 'axios'
// TODO: May need to move over to using 'useFetch' if this makes redundant api calls (e.g., on server and client), or create some smarter check here using 'useAsyncData'.

export const api = (target: string) => axios(getApiUrl(target))

export const getApiUrl = (
  target: string,
  host: string = import.meta.env.VITE_API_ROOT_URL || 'https://127.0.0.1:8000',
  prefix: string = '/api'
): string => `${host}${prefix}${target}`
