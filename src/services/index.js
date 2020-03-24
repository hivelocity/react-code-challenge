import Swagger from "swagger-client";

export const api = () => {
  const request = {
    url: "http://localhost:5000/"
  };

  return Swagger.http(request)
    .then(response => response)
    .catch(error => error.message);
};
