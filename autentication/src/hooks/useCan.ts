import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validadeUserPermissions } from "../utils/validadeUserPermissions";

type UseCanProps = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UseCanProps) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  const userHasValidPermissions = validadeUserPermissions(
   { user,
    permissions,
    roles,}
  );

  return userHasValidPermissions;
}
