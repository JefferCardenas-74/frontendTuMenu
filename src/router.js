import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LogIn from './components/User/LogIn.vue'
import SignUp from './components/User/SignUp.vue'
import SignUp2 from './components/User/SignUp2.vue'
import RegistroExitoso from './components/User/RegistroExitoso.vue'
import Home from './components/Home/Home.vue'
import About from './components/Home/About.vue'
import Restaurants from './components/Home/Restaurants.vue'
import Contact from './components/Home/Contact.vue'
import UserHome from './components/Restaurant/UserHome.vue'
import UserSettings from './components/Restaurant/UserSettings.vue'
import UserService from './components/Restaurant/UserService.vue'
import UserPayment from './components/Restaurant/UserPayment.vue'
import UserMenu from './components/Categories/pageCategorias.vue'

const routes = [
  {
    path: '/',
    name: "root",
    component: App
  },
    {
    path: '/home',
    name: "home",
    component: Home,
  },
  {
    path: '/about',
    name: "abaout",
    component: About
  },
  {
    path: '/restaurants',
    name: "restaurants",
    component: Restaurants
  },
  {
    path: '/contact',
    name: "contact",
    component: Contact
  },
  {
    path: '/user/logIn',
    name: "logIn",
    component: LogIn
  },
  {
    path: '/user/signUp',
    name: "signUp",
    component: SignUp
  },
  {
      path: '/user/signUp2',
      name: "signUp2",
      component: SignUp2,
      props: true
  },
  {
    path: '/user/registroExitoso',
    name: "registroExitoso",
    component: RegistroExitoso
  },
  {
    path: '/user/userhome',
    name: "userhome",
    component: UserHome
  },
  {
    path: '/user/settings',
    name: "settings",
    component: UserSettings
  },
  {
    path: '/user/service',
    name: "service",
    component: UserService
  },
  {
    path: '/user/payment',
    name: "payment",
    component: UserPayment
  },
  {
    path: '/user/menu',
    name: "menu",
    component: UserMenu
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
