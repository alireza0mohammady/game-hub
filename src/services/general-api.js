import apiClient from "./api-client.js";
class GeneralApi {
  constructor(endPoint) {
    const _endPoint = endPoint;

    this.get = function (params) {
      const controller = new AbortController();
      let paramsToSend;

      if (params) paramsToSend = { signal: controller.signal, params: params };
      else paramsToSend = { signal: controller.signal };

      const request = apiClient.get(_endPoint, paramsToSend);
      return {
        request,
        cancel: () => {
          controller.abort();
        },
      };
    };
  }
}
export default GeneralApi;
