import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import("../views/Welcome.vue")
  },
  {
    path: "/chat",
    name: "Chat",
    component: () =>
      import("../components/Chat.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
