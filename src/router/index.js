import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Order from "../views/Order.vue";
import Manage from "../views/Manage.vue";
import Cart from "../views/Cart.vue";

const routes = [
  { path: "/", name: "home", component: Index },
  { path: "/order", name: "order", component: Order },
  { path: "/manage", name: "manage", component: Manage },
  { path: "/cart", name: "cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
