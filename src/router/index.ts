import * as VueRouter from 'vue-router';

import Playground from '@pages/Playground.vue';

const routes = [
  {
    path: '/',
    component: Playground,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
