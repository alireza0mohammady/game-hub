import { useInfiniteQuery } from "@tanstack/react-query";
import generalApi from "./general-api.js";

function useGamesQuery(params) {
  let paramsToSend = {
    ...(params.ordering ? { ordering: params.ordering.id } : {}),
    ...(params.genres ? { genres: params.genres.id } : {}),
    ...(params.search ? { search: params.search } : {}),
    ...(params.platforms
      ? { parent_platforms: params.platforms.id.toString() }
      : {}),
  };
  return useInfiniteQuery({
    queryKey: ["games", params],
    queryFn: () => generalApi("/games", paramsToSend),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
}

export default useGamesQuery;
