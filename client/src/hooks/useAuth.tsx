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

  const { data: user, isLoading: userLoading } = useQuery<UserProfile>({
    queryKey: ["user"],
    queryFn: () => getProfile(token),
    enabled: isAuthenticated,
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(["authStatus"]);
    }
  });

  const isLoading = isAuthenticated && userLoading;

  return {
    isAuthenticated,
    user,
    isLoading: isLoading
  };
};
