import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/usersAPI";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function useUsersGet() {
  const pathname = useLocation().pathname;
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (pathname.includes("/users")) {
      setUserType(1);
    }

    if (pathname.includes("/idols")) {
      setUserType(2);
    }
  }, [pathname]);

  return useQuery({
    queryKey: ["users", userType],
    queryFn: () => getUsers({ userType }),
    enabled: userType !== null,
  });
}
