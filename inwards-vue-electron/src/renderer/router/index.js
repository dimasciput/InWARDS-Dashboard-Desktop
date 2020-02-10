import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map-landing-page',
      component: require('@/components/MapLandingPage').default
    },
    {
      path: '/dashboard',
      name: 'dashboard-page',
      component: require('@/components/Dashboard').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
