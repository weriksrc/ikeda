export default [
  {
    path: "/evolution",
    name: "Evolution",
    component: () => import("@/views/HomeView"),
    // meta: { isAuthenticated: true }
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: () => import("@/views/user/lessons/Index"),
    // meta: { isAuthenticated: true }
    children: [
      {
        path: ":idVideo",
        name: "avaliacao-campanha",
        // component: () =>
        //   import("@/views/campanha/aprovacao/AvaliacaoCampanha"),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/user/profile/Index"),
    // meta: { isAuthenticated: true }
  }
];
