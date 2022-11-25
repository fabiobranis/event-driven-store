/* eslint-disable no-undef */
const headers = { 'Content-Type': 'application/json' };

export const buildContentRequest = ({
  body,
  method,
}) => ({
  method,
  body: body ? JSON.stringify(body) : undefined,
  headers: body ? headers : undefined,
});

const makeRequest = ({
  endpoint, param, body, method = 'GET',
}) => {
  const path = [API_ENDPOINT, endpoint, param].filter(Boolean).join('/');
  const url = new URL(path, `http://${SERVER_ADDRESS}:${SERVER_PORT}`);

  return fetch(url, buildContentRequest({ body, method }));
};

export const get = ({ endpoint }) => makeRequest({ endpoint });

export const post = ({ endpoint, body }) => makeRequest({
  endpoint, body, method: 'POST',
});

export const patch = ({ endpoint, body, param }) => makeRequest({
  endpoint, body, param, method: 'PATCH',
});

export const upsert = ({ endpoint, body, param }) => (param
  ? patch({ endpoint, body, param })
  : post({ endpoint, body })
);
