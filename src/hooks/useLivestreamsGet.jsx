import { useQuery } from "@tanstack/react-query";
import { getLivestreams } from "../services/livestreamsAPI";

export default function useLivestreamsGet() {
  return useQuery({
    queryKey: ["livestreams"],
    queryFn: getLivestreams,
  });
}
