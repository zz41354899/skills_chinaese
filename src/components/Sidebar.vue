<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown, ChevronRight, X } from 'lucide-vue-next'

defineProps<{
  isOpen?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()

interface NavItem {
  title: string
  path?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: '概覽', path: '/home' },
  { title: '什麼是技能?', path: '/what-are-skills' },
  { title: '規格說明', path: '/specification' },
  {
    title: '給技能創建者',
    children: [
      { title: '快速開始', path: '/skill-creation/quickstart' },
      { title: '最佳實踐', path: '/skill-creation/best-practices' },
      { title: '優化描述', path: '/skill-creation/optimizing-descriptions' },
      { title: '評估技能', path: '/skill-creation/evaluating-skills' },
      { title: '使用腳本', path: '/skill-creation/using-scripts' },
    ]
  },
  {
    title: '給客戶端實作者',
    children: [
      { title: '添加技能支援', path: '/client-implementation/adding-skills-support' },
    ]
  }
]

const expandedSections = ref<Set<string>>(new Set(['給技能創建者', '給客戶端實作者']))

const toggleSection = (title: string) => {
  if (expandedSections.value.has(title)) {
    expandedSections.value.delete(title)
  } else {
    expandedSections.value.add(title)
  }
}

const isActive = (path?: string) => {
  if (!path || path === '#') return false
  return route.path === path
}
</script>

<template>
  <!-- 移動版背景遮罩 -->
  <div 
    v-if="isOpen"
    class="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
    @click="emit('close')"
  />
  
  <!-- 側邊欄 -->
  <aside 
    class="w-60 border-r border-border bg-background flex-shrink-0 overflow-y-auto h-full transition-transform duration-300 lg:translate-x-0"
    :class="[
      'fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <!-- 移動版關閉按鈕 -->
    <div class="lg:hidden flex items-center justify-between px-6 py-4 border-b border-border">
      <span class="text-lg font-bold">Agent Skills</span>
      <button
        @click="emit('close')"
        class="text-muted-foreground hover:text-foreground"
      >
        <X class="h-5 w-5" />
      </button>
    </div>
    
    <nav class="pl-6 pr-4 py-4 space-y-1">
      <template v-for="item in navItems" :key="item.title">
        <div v-if="item.children">
          <button
            @click="toggleSection(item.title)"
            class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
          >
            <span>{{ item.title }}</span>
            <ChevronDown v-if="expandedSections.has(item.title)" class="h-4 w-4" />
            <ChevronRight v-else class="h-4 w-4" />
          </button>
          <div v-if="expandedSections.has(item.title)" class="ml-4 mt-1 space-y-1">
            <router-link
              v-for="child in item.children"
              :key="child.title"
              :to="child.path || '#'"
              @click="emit('close')"
              class="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              :class="{ 'bg-accent text-foreground': isActive(child.path) }"
            >
              {{ child.title }}
            </router-link>
          </div>
        </div>
        <router-link
          v-else
          :to="item.path || '#'"
          @click="emit('close')"
          class="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
          :class="isActive(item.path) ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'"
        >
          {{ item.title }}
        </router-link>
      </template>
    </nav>
  </aside>
</template>
