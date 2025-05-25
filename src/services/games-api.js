import apiClient from "./api-client";
class gameApi {
  getGames() {
    const controller = new AbortController();
    const request = apiClient.get("/games", { signal: controller.signal });
    return {
      request,
      cancel: () => {
        controller.abort();
      },
    };
  }
}
export default new gameApi();
