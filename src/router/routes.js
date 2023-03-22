import System from "@/layouts/Index";
import Personal from "@/views/personal/routes/index"
import User from "@/views/user/routes/index"
import Login from "@/views/login/routes/index"
export default [
  {
    path: "/",
    name: "Home",
    redirect: "/evolution",
    component: System,
    // meta: { isAuthenticated: true },
    children: [...Personal, ...User]
  },
  ...Login
];