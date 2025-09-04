const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

const routes = [
  { path: "/", component: Home },
  { path: "/habit/:id", component: HabitDetail }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp({})
app.use(router)
app.mount("#app")
