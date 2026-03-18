<script setup lang="ts">
interface TocItem {
  id: string
  title: string
  level: number
}

interface Props {
  items: TocItem[]
}

defineProps<Props>()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  const mainContent = document.querySelector('main.overflow-y-auto') as HTMLElement
  
  if (element && mainContent) {
    // 獲取 main 容器和目標元素的位置
    const mainRect = mainContent.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    
    // 計算目標元素相對於 main 容器頂部的位置
    const scrollPosition = mainContent.scrollTop + (elementRect.top - mainRect.top) - 20
    
    // 只滾動 main 容器
    mainContent.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <aside class="hidden xl:block w-52 pl-6 pr-8 flex-shrink-0">
    <div class="py-12">
      <h3 class="text-sm font-semibold mb-4">On this page</h3>
      <nav class="space-y-2">
        <button
          v-for="item in items"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
          :class="{
            'pl-0': item.level === 2,
            'pl-4': item.level === 3,
          }"
        >
          {{ item.title }}
        </button>
      </nav>
    </div>
  </aside>
</template>
