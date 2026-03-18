<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Search, Github, X, MoreVertical } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'
import SearchModal from './SearchModal.vue'

const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const openSearch = () => {
  isSearchOpen.value = true
}

const closeSearch = () => {
  isSearchOpen.value = false
}

// 快捷鍵 Ctrl+K 或 Cmd+K
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    openSearch()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex h-16 items-center px-4 md:px-8 gap-4 max-w-[1400px] mx-auto">
      <router-link to="/home" class="flex items-center flex-shrink-0">
        <span class="inline-block text-2xl sm:text-3xl font-bold tracking-tight">Agent Skills</span>
      </router-link>
      
      <!-- 搜尋框 - 中間位置 -->
      <div class="flex-1 max-w-2xl mx-auto hidden md:block">
        <button 
          @click="openSearch"
          class="flex items-center relative w-full h-9 px-3 rounded-md border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Search class="h-4 w-4 mr-2 flex-shrink-0" />
          <span>Search...</span>
          <kbd class="absolute right-3 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span class="text-xs">ctrl</span>K
          </kbd>
        </button>
      </div>

      <!-- 右側按鈕 -->
      <div class="flex items-center space-x-4 flex-shrink-0">
          <a 
            href="https://github.com/agentskills/agentskills" 
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github class="h-5 w-5" />
            <span>agentskills/agentskills</span>
          </a>

          <ThemeToggle />

          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-muted-foreground hover:text-foreground"
          >
            <MoreVertical v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-border">
      <div class="px-4 py-3">
        <button 
          @click="openSearch"
          class="flex items-center w-full px-3 py-2 mb-3 rounded-md border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Search class="h-4 w-4 mr-2" />
          <span>Search...</span>
        </button>
        <a 
          href="https://github.com/agentskills/agentskills" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
        >
          <Github class="h-5 w-5" />
          <span>agentskills/agentskills</span>
        </a>
      </div>
    </div>

    <!-- 搜尋模態框 -->
    <SearchModal v-if="isSearchOpen" @close="closeSearch" />
  </nav>
</template>
