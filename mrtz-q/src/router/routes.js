
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/add', component: () => import('pages/Add.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
]

export default routes
