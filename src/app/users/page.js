import Users from "@/features/users/Users";
import Can from "@/components/Can";

export default function Page() {
  return (
    <Can permission="USER_READ">
      <Users />
    </Can>
  );
}
