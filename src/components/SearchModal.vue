<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Clock, Hash } from 'lucide-vue-next'
import Card from './ui/Card.vue'
import Input from './ui/Input.vue'

interface SearchResult {
  title: string
  path: string
  breadcrumb: string
  description: string
}

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()
const searchQuery = ref('')
const selectedIndex = ref(0)

// 搜尋數據
const searchData: SearchResult[] = [
  {
    title: '什麼是技能?',
    path: '/what-are-skills',
    breadcrumb: '概覽',
    description: '什麼是技能? 它的核心概念和運作方式'
  },
  {
    title: '規格說明',
    path: '/specification',
    breadcrumb: '文件',
    description: 'SKILL.md 檔案的完整格式規範'
  },
  {
    title: '如何為你的代理程式添加技能支援',
    path: '/client-implementation/adding-skills-support',
    breadcrumb: '客戶端實作 > 如何為你的代理程式添加技能支援',
    description: '如何為你的代理程式添加技能支援 此技能提供了為 AI 代理程式或開發工具添加 Agent Skills 支援的指南'
  },
  {
    title: '快速開始',
    path: '/quickstart',
    breadcrumb: '指南',
    description: '快速開始使用 Agent Skills'
  },
  {
    title: '優化技能描述',
    path: '/skill-creation/optimizing-descriptions',
    breadcrumb: '技能創建',
    description: '如何改進你的技能描述,使其在相關提示下可靠地觸發'
  },
  {
    title: '評估技能輸出品質',
    path: '/skill-creation/evaluating-skills',
    breadcrumb: '技能創建',
    description: '如何使用評估驅動的迭代來測試技能是否產生良好的輸出'
  },
  {
    title: '在技能中使用腳本',
    path: '/skill-creation/using-scripts',
    breadcrumb: '技能創建',
    description: '如何在技能中運行命令和打包可執行腳本'
  },
  {
    title: '最佳實踐',
    path: '/skill-creation/best-practices',
    breadcrumb: '技能創建',
    description: '編寫高品質技能的指南和最佳實踐'
  }
]

// 最近搜尋記錄
const recentSearches = ref<Array<{ query: string; result: SearchResult }>>([])

// 載入最近搜尋記錄
onMounted(() => {
  const stored = localStorage.getItem('recentSearches')
  if (stored) {
    try {
      recentSearches.value = JSON.parse(stored)
    } catch (e) {
      recentSearches.value = []
    }
  }
})

// 搜尋結果
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }
  
  const query = searchQuery.value.toLowerCase()
  return searchData.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.breadcrumb.toLowerCase().includes(query)
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

// 點擊背景關閉
const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
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
    @click="handleBackdropClick"
  >
    <Card class="w-full max-w-2xl shadow-lg">
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
        <div v-if="!searchQuery.trim() && recentSearches.length > 0" class="px-3 py-2 text-sm text-muted-foreground">
          最近搜尋
        </div>

        <!-- 搜尋結果或最近搜尋 -->
        <div v-if="displayItems.length > 0" class="space-y-1 max-h-[400px] overflow-y-auto">
          <div
            v-for="(item, index) in displayItems"
            :key="'result' in item ? item.result.path : item.path"
            @click="'result' in item ? selectItem(item.result, item.query) : selectItem(item, searchQuery)"
            class="flex items-start gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors"
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
