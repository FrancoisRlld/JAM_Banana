
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Welcome',
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
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
