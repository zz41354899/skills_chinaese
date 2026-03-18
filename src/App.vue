<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground flex flex-col h-screen">
    <NavBar />
    <div class="flex flex-1 overflow-hidden h-full max-w-[1400px] mx-auto w-full">
      <Sidebar :is-open="isSidebarOpen" @close="closeSidebar" />
      <router-view v-slot="{ Component }">
        <component :is="Component" @toggle-sidebar="toggleSidebar" />
      </router-view>
    </div>
    <Footer />
  </div>
</template>
