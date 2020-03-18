const api = {
  // Had to use cors-anywhere because the API was not letting me request it from localhost
  baseUrl:
    "https://cors-anywhere.herokuapp.com/https://core.hivelocity.net/api/v2/device/",
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
    accept: "application/json"
  },
  getDevices: async () => {
    const response = await fetch(api.baseUrl, { headers: api.headers });

    return await response.json();
  }
};

export const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR"
};

export default api;
