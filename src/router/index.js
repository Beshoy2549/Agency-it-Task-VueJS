import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/form/Login.vue";
import Signup from "../components/form/Signup.vue";
import User from "../views/User.vue";
import Resoures from "../views/Resoures.vue";
import SingleUser from "../components/users/SingleUser.vue";
import singleResoures from "../components/Resoures/singleResoure.vue";
import creatUser from "../components/users/Createuser.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/login",
    children: [
      {
        path: "login",
        component: Login,
        name: "Login",
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: "signup",
        component: Signup,
        name: "Signup",
        meta: {
          requiresVisitor: true
        }
      }
    ]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    redirect: "/resoures",
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/user",
        name: "User",
        component: User,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/user/:id",
        name: "SingleUser",
        component: SingleUser,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/resoures",
        name: "Resoures",
        component: Resoures,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/resoures/:id",
        name: "singleResoures",
        component: singleResoures,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/creatuser",
        name: "creatUser",
        component: creatUser,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
