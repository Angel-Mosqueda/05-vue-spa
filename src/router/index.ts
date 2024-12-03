import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    //landig
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: true,
          component: () => import('@/modules/landing/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    //Auth
    {
      path: '/auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    //Not Found
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});

export default router;