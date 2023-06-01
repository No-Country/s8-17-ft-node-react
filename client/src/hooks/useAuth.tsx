import { getProfile } from "@/backend/user";
import { UserProfile } from "@/types";
import { checkSession } from "@/utils/checkSession";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useAuth = (): {
  isAuthenticated: boolean;
  user: UserProfile | undefined;
  isLoading: boolean;
} => {
  const queryClient = useQueryClient();
  const token = checkSession();

  const isAuthenticated = !!token;

  useQuery({
    queryKey: ["authStatus"],
    queryFn: checkSession,
    cacheTime: 0,
    staleTime: 0,
    initialData: ""
  });

  const { data: user, isLoading } = useQuery<UserProfile>({
    queryKey: ["user"],
    queryFn: () => getProfile(token),
    enabled: isAuthenticated,
    retry: false
  });

  return {
    isAuthenticated,
    user,
    isLoading: isLoading || !isAuthenticated
  };
};
