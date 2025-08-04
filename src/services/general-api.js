import apiClient from "./api-client.js";

function generalApi(endPoint, paramsToSend) {
  if (paramsToSend)
    return apiClient.get(endPoint, { params: paramsToSend }).then((res) => {
      return res.data.results;
    });

  return apiClient.get(endPoint).then((res) => {
    return res.data.results;
  });
}

export default generalApi;
