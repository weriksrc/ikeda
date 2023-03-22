export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/layouts/login/Index"),
  },
  {
    path: "/login/:token",
    name: "Auth",
    component: () => import("@/layouts/login/Index"),
  },
];
