import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
