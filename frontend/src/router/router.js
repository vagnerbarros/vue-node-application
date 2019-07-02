import Vue from 'vue'
import store from '@/store/store';
import Router from 'vue-router'

import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import Sair from '@/views/Sair';
import ListClients from '@/views/ListClients';
import ClientForm from '@/views/ClientForm';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Dashboard,
      meta: { requiresAuth: true}
    },
    {
      path: '/sair',
      name: 'sair',
      component: Sair,
      meta: { requiresAuth: true}
    },
    {
      path: '/clients',
      name: 'clients',
      component: ListClients,
      meta: { requiresAuth: true}
    },
    {
      path: '/clients/new',
      name: 'formNewClient',
      component: ClientForm,
      meta: { requiresAuth: true}
    },
    {
      path: '/clients/edit',
      name: 'formEditClient',
      component: ClientForm,
      meta: { requiresAuth: true}
    }
  ]
});

router.beforeEach((to, from, next) => {

  if(to.path !== '/'){
    if(!store.state.user || store.state.user.nome === ''){
      store.state.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {

    let token = localStorage.getItem('token');
    let tokenExpiration = JSON.parse(atob(token.split('.')[1]));
    var currentTime = Math.round(new Date().getTime() / 1000);
    if (!token || tokenExpiration['exp'] < currentTime) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;