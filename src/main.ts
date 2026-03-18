import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import WhatAreSkillsPage from './pages/WhatAreSkillsPage.vue'
import SpecificationPage from './pages/SpecificationPage.vue'
import QuickstartPage from './pages/QuickstartPage.vue'
import BestPracticesPage from './pages/BestPracticesPage.vue'
import OptimizingDescriptionsPage from './pages/OptimizingDescriptionsPage.vue'
import EvaluatingSkillsPage from './pages/EvaluatingSkillsPage.vue'
import UsingScriptsPage from './pages/UsingScriptsPage.vue'
import AddingSkillsSupportPage from './pages/AddingSkillsSupportPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/what-are-skills', component: WhatAreSkillsPage },
    { path: '/specification', component: SpecificationPage },
    { path: '/skill-creation/quickstart', component: QuickstartPage },
    { path: '/skill-creation/best-practices', component: BestPracticesPage },
    { path: '/skill-creation/optimizing-descriptions', component: OptimizingDescriptionsPage },
    { path: '/skill-creation/evaluating-skills', component: EvaluatingSkillsPage },
    { path: '/skill-creation/using-scripts', component: UsingScriptsPage },
    { path: '/client-implementation/adding-skills-support', component: AddingSkillsSupportPage },
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
