const buildOptions = (data: any) => {
  const options: any = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
    };
  }

  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  return options;
};

const request = async (method: any, url: any, data?: any) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
