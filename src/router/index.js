import { createRouter, createWebHistory } from "vue-router";
import View from "../components/View.vue";
import Form from "../components/Form.vue";

const routes = [
  {
    path: "/",
    name: "Data Penerima Bansos",
    component: View,
  },
  {
    path: "/form",
    name: "Tambah Data Penerima Bansos",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
