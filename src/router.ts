
import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProfileView from "@/views/ProfileView.vue"
import EditProfileView from "@/views/EditProfileView.vue"
import GestionTachesView from '@/views/GestionTachesView.vue';

const routes = [
  { path: "/login", component: LoginView, name: "login" },
  { path: "/register", component: RegisterView, name: "register" },
  { path: "/profile", component: ProfileView, name: "profile" },
  { path: "/edit-profile", component: EditProfileView, name: "edit-profile" },
  { path: "/gestion-taches", component: GestionTachesView, name:"gestion-taches" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
