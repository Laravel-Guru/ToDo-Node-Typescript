import axios, { AxiosRequestConfig } from 'axios'

const API_BASE_URL = 'http://127.0.0.1:4000'

let reqConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
}

export const request = axios.create(reqConfig)