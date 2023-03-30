export default [
  {
    path: "/mentorship/:link",
        name: "MentorshipVideo",
    component: () => import("@/views/personal/mentorship/MentorshipVideo"),
    // meta: { isAuthenticated: true }
  },
];
