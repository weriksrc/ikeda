export default [
  {
    path: "/evolution",
    name: "Evolution",
    component: () => import("@/views/HomeView"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: () => import("@/views/user/lessons/Index"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/lessons/:mentorshipName/:mentorshipId",
    name: "LessonsMentorshipLessons",
    component: () => import("@/views/user/lessons/MentorshipLessons"),
    meta: { isAuthenticated: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/user/profile/Index"),
    meta: { isAuthenticated: true }
  }
];
