import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import DashboardProfilePageCreate from '../pages/DashboardProfilePageCreate.vue'
import DashboardProfilePageEdit from '../pages/DashboardProfilePageEdit.vue'

import DashboardLayout from '../pages/DashboardLayout.vue'
import DashboardHomePage from '../pages/DashboardHomePage.vue'
import DashboardPersonProfilePage from '../pages/DashboardPersonProfilePage.vue'
import DetailOfPersonProfile from '../components/dashboard/DetailOfPersonProfile.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: HomePage },
      { path: '/dashboard', component: DashboardLayout,
        children: [
          {
            name: 'dashboard',
            path: '',
            component: DashboardHomePage
          },
          {
            name: 'list-person-profile',
            path: 'person-profile',
            component: DashboardPersonProfilePage,
            children: [
              {
                name: 'detail-person-profile',
                path: ':id',
                component: DetailOfPersonProfile
              }
            ]
          },
          {
            name: 'add-person-profile',
            path: 'add-person-profile',
            component: DashboardProfilePageCreate
          },
          {
            name: 'edit-person-profile',
            path: 'edit-person-profile/:id',
            component: DashboardProfilePageEdit
          }
        ]},
      { path: '*', redirect: { name: 'home' } }
    ]
  });