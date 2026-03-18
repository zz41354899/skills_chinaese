<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '評估技能輸出品質',
  description: '如何使用評估驅動的迭代來測試技能是否產生良好的輸出。',
  keywords: 'Agent Skills, 評估, 測試, 品質保證'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'designing-test-cases', title: '設計測試案例', level: 2 },
  { id: 'running-evals', title: '運行評估', level: 2 },
  { id: 'grading-outputs', title: '評分輸出', level: 2 },
  { id: 'iterating', title: '迭代改進', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="評估技能輸出品質" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Evaluating skill output quality -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">評估技能輸出品質</h1>
    <!-- How to test whether your skill produces good outputs using eval-driven iteration. -->
    <p class="text-xl text-muted-foreground mb-12">
      如何使用評估驅動的迭代來測試技能是否產生良好的輸出。
    </p>

    <!-- Designing test cases -->
    <section id="designing-test-cases" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">設計測試案例</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Designing test cases -->
          <p class="text-muted-foreground mb-4">
            創建代表性的測試案例:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>使用真實的使用者請求作為測試輸入</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>涵蓋技能應該處理的各種情境</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>包含邊界情況和潛在的錯誤情況</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>從簡單案例開始,逐步增加複雜度</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Running evals -->
    <section id="running-evals" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">運行評估</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Running evals -->
          <p class="text-muted-foreground mb-4">
            設置評估環境:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>工作區結構:</strong> 為每個測試案例創建獨立的工作區</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>生成運行:</strong> 使用代理程式執行技能並記錄結果</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>捕獲時間數據:</strong> 記錄執行時間和資源使用情況</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>編寫斷言:</strong> 定義成功的標準並自動檢查</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Grading outputs -->
    <section id="grading-outputs" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">評分輸出</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Grading outputs -->
          <p class="text-muted-foreground mb-4">
            評估技能輸出的品質:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>自動化檢查:</strong> 使用斷言來驗證輸出的正確性</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>LLM 評分:</strong> 使用另一個 LLM 來評估輸出品質</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>人工審查:</strong> 對關鍵案例進行人工檢查</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>聚合結果:</strong> 計算通過率和識別模式</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Iterating on the skill -->
    <section id="iterating" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">迭代改進</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- The loop -->
          <p class="text-muted-foreground mb-4">
            使用評估驅動的迭代循環:
          </p>
          <ol class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2 font-semibold">1.</span>
              <span>編寫初始技能版本</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">2.</span>
              <span>運行評估並收集結果</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">3.</span>
              <span>分析失敗案例並識別模式</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">4.</span>
              <span>調整技能指令或描述</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">5.</span>
              <span>重新運行評估並比較結果</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">6.</span>
              <span>重複直到達到目標品質</span>
            </li>
          </ol>
        </CardContent>
      </Card>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <ul class="space-y-3 text-muted-foreground">
        <li>
          <router-link to="/skill-creation/using-scripts" class="text-primary hover:underline">
            在技能中使用腳本
          </router-link>
          <span class="text-sm"> — 為複雜操作添加可執行程式碼</span>
        </li>
        <li>
          <router-link to="/skill-creation/best-practices" class="text-primary hover:underline">
            最佳實踐
          </router-link>
          <span class="text-sm"> — 編寫高品質技能的指南</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
