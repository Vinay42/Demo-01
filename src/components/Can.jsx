import { can } from "../auth/permissions";

export default function Can({ permission, children }) {
  if (!can(permission)) return null;
  return children;
}
