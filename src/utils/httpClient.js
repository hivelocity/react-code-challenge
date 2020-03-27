const defaultHeaders = {
  Accept: 'application/json'
};

function handleFetchResponse(res) {
  if (res.ok) return res.json();
  throw new Error(res);
}

export default {
  get: (url, opts) => {
    return fetch(url, {
      ...opts,
      method: 'GET',
      headers: { ...defaultHeaders, ...opts.headers }
    }).then(handleFetchResponse);
  }
};
