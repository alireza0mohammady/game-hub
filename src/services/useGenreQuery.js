import { useQuery } from "@tanstack/react-query";
import generalApi from "./general-api.js";

function useGenreQuery() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => generalApi("/genres"),
  });
}

export default useGenreQuery;
