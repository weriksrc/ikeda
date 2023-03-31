export default [
  {
    path: "/mentorship/:link",
        name: "MentorshipVideo",
    component: () => import("@/views/personal/mentorship/MentorshipVideo"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/lessons/:link",
        name: "LessonsVideo",
    component: () => import("@/views/user/lessons/MentorshipVideo"),
    meta: { isAuthenticated: true }
  },
];
