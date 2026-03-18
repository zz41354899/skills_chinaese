<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Clock, Hash, X } from 'lucide-vue-next'
import Card from './ui/Card.vue'
import Input from './ui/Input.vue'

interface SearchResult {
  id: string
  title: string
  path: string
  breadcrumb: string
  description: string
  content: string
}

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()
const searchQuery = ref('')
const selectedIndex = ref(0)

// 搜尋數據 - 從 JSON 文件載入
const searchData = ref<SearchResult[]>([])

// 載入搜尋數據
onMounted(async () => {
  try {
    const response = await fetch('/search-data.json')
    searchData.value = await response.json()
  } catch (error) {
    console.error('Failed to load search data:', error)
    searchData.value = []
  }
  
  // 載入最近搜尋記錄
  const stored = localStorage.getItem('recentSearches')
  if (stored) {
    try {
      recentSearches.value = JSON.parse(stored)
    } catch (e) {
      recentSearches.value = []
    }
  }
})

// 最近搜尋記錄
const recentSearches = ref<Array<{ query: string; result: SearchResult }>>([])

// 搜尋結果
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }
  
  const query = searchQuery.value.toLowerCase()
  return searchData.value.filter((item: SearchResult) => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.breadcrumb.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  ).slice(0, 8)
})

// 顯示最近搜尋或搜尋結果
const displayItems = computed(() => {
  if (searchQuery.value.trim()) {
    return searchResults.value
  }
  return recentSearches.value.slice(0, 5)
})

// 重置選擇索引
watch(searchQuery, () => {
  selectedIndex.value = 0
})

// 處理選擇項目
const selectItem = (item: SearchResult, query?: string) => {
  // 保存到最近搜尋
  if (query) {
    const newSearch = { query, result: item }
    recentSearches.value = [
      newSearch,
      ...recentSearches.value.filter(s => s.result.path !== item.path)
    ].slice(0, 10)
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value))
  }
  
  router.push(item.path)
  emit('close')
}

// 刪除單個歷史記錄
const removeRecentSearch = (index: number, e: MouseEvent) => {
  e.stopPropagation()
  recentSearches.value.splice(index, 1)
  localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value))
}

// 清除所有歷史記錄
const clearAllRecentSearches = () => {
  recentSearches.value = []
  localStorage.removeItem('recentSearches')
}

// 鍵盤導航
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, displayItems.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
  } else if (e.key === 'Enter' && displayItems.value[selectedIndex.value]) {
    e.preventDefault()
    const item = displayItems.value[selectedIndex.value]
    if ('result' in item) {
      selectItem(item.result, item.query)
    } else {
      selectItem(item, searchQuery.value)
    }
  } else if (e.key === 'Escape') {
    emit('close')
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
  <div 
    class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
    @click="emit('close')"
  >
    <Card class="w-full max-w-3xl shadow-lg" @click.stop>
      <div class="p-4">
        <!-- 搜尋輸入框 -->
        <div class="relative mb-4">
          <Search class="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="pl-10 pr-4 py-6 text-base"
            autofocus
          />
        </div>

        <!-- 最近搜尋標題 -->
        <div v-if="!searchQuery.trim() && recentSearches.length > 0" class="flex items-center justify-between px-3 py-2">
          <span class="text-sm text-muted-foreground">最近搜尋</span>
          <button
            @click="clearAllRecentSearches"
            class="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            清除全部
          </button>
        </div>

        <!-- 搜尋結果或最近搜尋 -->
        <div v-if="displayItems.length > 0" class="space-y-1 max-h-[500px] overflow-y-auto">
          <div
            v-for="(item, index) in displayItems"
            :key="'result' in item ? item.result.path : item.path"
            @click="'result' in item ? selectItem(item.result, item.query) : selectItem(item, searchQuery)"
            class="flex items-start gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors group"
            :class="index === selectedIndex ? 'bg-accent' : 'hover:bg-accent/50'"
          >
            <div class="mt-0.5 text-muted-foreground">
              <Clock v-if="!searchQuery.trim()" class="h-4 w-4" />
              <Hash v-else class="h-4 w-4" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm text-muted-foreground mb-0.5">
                {{ 'result' in item ? item.result.breadcrumb : item.breadcrumb }}
              </div>
              <div class="font-medium mb-1">
                {{ 'result' in item ? item.result.title : item.title }}
              </div>
              <div class="text-sm text-muted-foreground line-clamp-1">
                {{ 'result' in item ? item.result.description : item.description }}
              </div>
            </div>
            <!-- 刪除按鈕 (僅在歷史記錄中顯示) -->
            <button
              v-if="!searchQuery.trim()"
              @click="removeRecentSearch(index, $event)"
              class="mt-0.5 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        </div>

        <!-- 無結果 -->
        <div v-else-if="searchQuery.trim()" class="px-3 py-8 text-center text-muted-foreground">
          找不到相關結果
        </div>

        <!-- 空狀態 -->
        <div v-else-if="recentSearches.length === 0" class="px-3 py-8 text-center text-muted-foreground">
          開始輸入以搜尋文件
        </div>
      </div>
    </Card>
  </div>
</template>
