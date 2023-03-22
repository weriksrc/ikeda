import store from "../store"

export default {
  handleUserLoginStatus: (to, from, next) => {
    const isLogged = store.getters.isLogged;
    const routeRequiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (!routeRequiresAuth) return next();
    routeRequiresAuth && isLogged ? next() : next({ path: "/login" });
  }
}
