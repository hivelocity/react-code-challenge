import axios from "axios";
import { API_ENDPOINT, API_KEY } from "../settings";

/**
 * Default error messages for failing requests.
 */
const errorMessages = {
  default: "Something went wrong",
  noResponse: "No response from the server",
  network: "No network"
};

/**
 * errorHandler handles three types of errors
 * relationed to requests.
 */
function errorHandler(error) {
  if (error.response) {
    // The server responded with a status code
    // that falls out of the range of 2xx.
    throw error.response.data || errorMessages.default;
  } else if (error.request) {
    // The request was made but no
    // response was received.
    throw error.request.response || errorMessages.noResponse;
  } else {
    // Something went wrong in
    // setting up the request.
    throw error.message || errorMessages.network;
  }
}

/**
 * API instance.
 */
const request = axios.create({
  baseURL: API_ENDPOINT
});

/**
 * Adds the API Key to the headers.
 */
request.interceptors.request.use(req => {
  const newRequest = req;
  newRequest.headers.common["X-API-KEY"] = API_KEY;
  return newRequest;
});

/**
 * Do generic requests.
 */
export async function fetch({ url, method, headers, data, params }) {
  try {
    const response = await request({
      url,
      headers,
      method,
      data,
      params
    });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
}
