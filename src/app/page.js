import Link from "next/link";
import { can } from "@/auth/permissions";

const routes = [
  { path: "/dashboard", label: "Dashboard", permission: "DASHBOARD_READ" },
  { path: "/users", label: "Users", permission: "USER_READ" },
  { path: "/payments", label: "Payments", permission: "PAYMENT_READ" },
];

export default function Home() {
  return (
    <div>
      <h1>App: {process.env.NEXT_PUBLIC_APP_NAME}</h1>

      <ul>
        {routes
          .filter((r) => can(r.permission))
          .map((r) => (
            <li key={r.path}>
              <Link href={r.path}>{r.label}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
