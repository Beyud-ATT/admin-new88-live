import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/newsAPI";

export default function useNewsGet() {
  return useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
}
