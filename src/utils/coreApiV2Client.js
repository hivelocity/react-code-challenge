import httpClient from './httpClient';

const rootCoreApiV2Url = 'https://core.hivelocity.net/api/v2';

const defaultHeaders = {
  /**
   * Using CRA's environment variables allows us to keep the key
   * out of the repository, but the key's value will still be
   * shipped to the client. Ideally, the key is kept on a
   * server/lambda instead.
   */
  'X-API-KEY': process.env.REACT_APP_API_KEY
};

export default {
  get: path => {
    return httpClient.get(`${rootCoreApiV2Url}/${path}`, {
      headers: defaultHeaders
    });
  }
};
