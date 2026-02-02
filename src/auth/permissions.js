// Simulated decoded JWT (normally from backend)
export const getUserFromToken = () => {
  if (process.env.NEXT_PUBLIC_APP_NAME === "ADMIN") {
    return {
      role: "ADMIN",
      permissions: [
        "DASHBOARD_READ",
        "USER_READ",
        "PAYMENT_READ",
      ],
    };
  }

  return {
    role: "TEST_USER",
    permissions: ["DASHBOARD_READ", "USER_READ"],
  };
};

export const can = (permission) => {
  const user = getUserFromToken();
  return user.permissions.includes(permission);
};
