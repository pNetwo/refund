import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = true;
// const session = undefined

const session = {
  user: {
    role: "",
  },
};

export function Route() {
  switch (session?.user.role) {
    case "employee":
      return <EmployeeRoutes />;

    case "manager":
      return <ManagerRoutes />;

    default:
      return <AuthRoutes />;
  }
}

export function Routes() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
