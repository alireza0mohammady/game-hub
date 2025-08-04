import { useQuery } from "@tanstack/react-query";
import generalApi from "./general-api.js";

function usePlatformsQuery() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => generalApi("/platforms/lists/parents"),
  });
}

export default usePlatformsQuery;
