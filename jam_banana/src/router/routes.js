
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Welcome.vue')
      }
    ]
  },
  {
    path: '/success',
    component: () => import('layouts/SuccessLayout.vue'),
    children: [
      {
        path: '',
        name: 'Success',
        component: () => import('pages/Success.vue')
      }
    ]
  },
  {
    path: '/citations',
    component: () => import('layouts/CitationsLayout.vue'),
    children: [
      {
        path: '',
        name: 'Citations',
        component: () => import('pages/Citations.vue')
      }
    ]
  },
  {
    path: '/buttons',
    component: () => import('layouts/ButtonsLayout.vue'),
    children: [
      {
        path: '',
        name: 'Buttons',
        component: () => import('pages/Buttons.vue')
      }
    ]
  },
  {
    path: '/gorilla',
    component: () => import('layouts/GorillaLayout.vue'),
    children: [
      {
        path: '',
        name: 'Gorilla',
        component: () => import('pages/Gorilla.vue')
      }
    ]
  },
  {
    path: '/bananas',
    component: () => import('layouts/BananasLayout.vue'),
    children: [
      {
        path: '',
        name: 'Bananas',
        component: () => import('pages/Bananas.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
