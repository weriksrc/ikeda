export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/personal/dashboard/Index"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/mentorship",
    name: "Mentorship",
    component: () => import("@/views/personal/mentorship/Index"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/mentorship/:mentorshipName/:mentorshipId",
    name: "MentorshipLessons",
    component: () => import("@/views/personal/mentorship/MentorshipLessons"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/personal/users/Index"),
    meta: { isAuthenticated: true }
  }
];
