<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  toggleSidebar: []
}>()
</script>

<template>
  <div class="flex items-center gap-3 mb-6 lg:hidden">
    <button
      @click="emit('toggleSidebar')"
      class="text-muted-foreground hover:text-foreground"
    >
      <Menu class="h-5 w-5" />
    </button>
    <h1 class="text-lg font-medium">{{ title }}</h1>
  </div>
</template>
