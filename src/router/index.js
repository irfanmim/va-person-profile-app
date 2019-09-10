import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import ProfilePageCreate from '../pages/ProfilePageCreate.vue'
import ProfilePageResult from '../pages/ProfilePageResult.vue'
import ProfilePageEdit from '../pages/ProfilePageEdit.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: HomePage },
      { path: '/create', name: 'create', component: ProfilePageCreate },
      { path: '/result', name: 'result', component: ProfilePageResult },
      { path: '/edit', name: 'edit', component: ProfilePageEdit },
      { path: '*', redirect: { name: 'home' } }
    ]
  });