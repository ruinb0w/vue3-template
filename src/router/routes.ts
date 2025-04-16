export const routes = [
  { path: '/', component: () => import('@/views/HomePage/HomePage.vue') },
  { path: '/about', component: () => import("@/views/AboutPage/AboutPage.vue") },
  { path: '/element_page', component: () => import("@/views/ElementPage/ElementPage.vue") },
]
