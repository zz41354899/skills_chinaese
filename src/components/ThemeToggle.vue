<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    if (!isDark.value) {
      document.documentElement.classList.remove('dark')
    }
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-md hover:bg-accent transition-colors"
    :aria-label="isDark ? '切換到淺色模式' : '切換到深色模式'"
  >
    <Sun v-if="isDark" class="h-5 w-5" />
    <Moon v-else class="h-5 w-5" />
  </button>
</template>
