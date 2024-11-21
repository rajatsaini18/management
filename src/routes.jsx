import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";

const routes = [
  { path: "/", Component: Dashboard },
  { path: "/users", Component: UserManagement },
  { path: "/roles", Component: RoleManagement },
  { path: "/permissions", Component: PermissionManagement },
];

export default routes;
