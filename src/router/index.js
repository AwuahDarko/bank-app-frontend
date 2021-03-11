/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";


// ? === packages =====
import VuePageTitle from "vue-page-title";
import VueProgressBar from "vue-progressbar";
import VModal from "vue-js-modal";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ? === views ====== 
// import Home from "../views/Home.vue";
import Account from '../views/Account.vue'

Vue.use(VueRouter);

const options = {
  color: "#00BFFF",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false,
  autoFinish: false
};


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueProgressBar, options);

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.use(VuePageTitle, {
  prefix: "Bank - "
  // suffix: '- My App '
});


Vue.use(VModal, {
  height: "auto",
  width: "auto",
  adaptive: true,
  scrollable: true
});



function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: lazyLoad("SignUp")
  },
  {
    path: "/register-one",
    name: "RegisterOne",
    component: lazyLoad("RegisterOne")
  },
  {
    path: "/register-two",
    name: "RegisterTwo",
    component: lazyLoad("RegisterTwo")
  },
  {
    path: "",
    component: Account,
    children: [
      {
        path: '/account/profile',
        component: lazyLoad("Profile")
      },
      {
        path: '/account/change-pin',
        component: lazyLoad("ChangePin")
      },
      {
        path: '/account/online-statement',
        component: lazyLoad("OnlineStatement")
      },
      {
        path: '/account/check-balance',
        component: lazyLoad("CheckBalance")
      },
      {
        path: '/account/wire-transfer',
        component: lazyLoad("WireTransfer")
      },
      {
        path: '/account/internal-transfer',
        component: lazyLoad("InternalTransfer")
      },
      {
        path: '/account/dashboard',
        component: lazyLoad("Dashboard")
      },
      {
        path: '/account/transfer-summary',
        component: lazyLoad("TransferSummary")
      },
      {
        path: '/account/confirm-cot',
        component: lazyLoad("ConfirmCot")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
