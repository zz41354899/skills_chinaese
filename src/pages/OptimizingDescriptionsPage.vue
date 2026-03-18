<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '優化技能描述',
  description: '如何改進你的技能描述，使其在相關提示下可靠地觸發。',
  keywords: 'Agent Skills, 技能描述, 觸發機制, 優化'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'how-triggering-works', title: '技能觸發機制', level: 2 },
  { id: 'writing-descriptions', title: '編寫有效描述', level: 2 },
  { id: 'testing-descriptions', title: '測試描述', level: 2 },
  { id: 'optimization-loop', title: '優化循環', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="優化技能描述" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Optimizing skill descriptions -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">優化技能描述</h1>
    <!-- How to improve your skill's description so it triggers reliably on relevant prompts. -->
    <p class="text-xl text-muted-foreground mb-12">
      如何改進你的技能描述,使其在相關提示下可靠地觸發。
    </p>

    <!-- How skill triggering works -->
    <section id="how-triggering-works" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">技能觸發機制</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- How skill triggering works -->
          <p class="text-muted-foreground mb-4">
            代理程式使用漸進式揭露來管理技能:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>啟動時只載入 <code class="bg-muted px-1 py-0.5 rounded text-xs">name</code> 和 <code class="bg-muted px-1 py-0.5 rounded text-xs">description</code></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>根據使用者請求和描述的匹配度決定是否載入完整的 <code class="bg-muted px-1 py-0.5 rounded text-xs">SKILL.md</code></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>描述的品質直接影響技能是否在正確時機被觸發</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Writing effective descriptions -->
    <section id="writing-descriptions" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">編寫有效描述</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Writing effective descriptions -->
          <p class="text-muted-foreground mb-4">
            遵循這些原則來編寫有效的描述:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Use imperative phrasing -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>使用祈使句:</strong> 使用「當...時使用此技能」而非「此技能做...」</span>
            </li>
            <!-- Focus on user intent, not implementation -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>關注使用者意圖:</strong> 描述使用者想達成什麼,而非技能的內部機制</span>
            </li>
            <!-- Err on the side of being pushy -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>寧可積極:</strong> 明確列出技能適用的情境,包括使用者未直接提及領域的情況</span>
            </li>
            <!-- Keep it concise -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>保持簡潔:</strong> 幾句話到一小段文字即可,最多 1024 個字元</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Testing descriptions -->
    <section id="testing-descriptions" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">測試描述</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Testing whether a description triggers -->
          <p class="text-muted-foreground mb-4">
            設計測試查詢來驗證描述的有效性:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Should-trigger queries -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>應該觸發的查詢:</strong> 創建技能應該回應的真實使用者請求範例</span>
            </li>
            <!-- Should-not-trigger queries -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>不應觸發的查詢:</strong> 創建看似相關但技能不應處理的請求</span>
            </li>
            <!-- Tips for realism -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>保持真實性:</strong> 使用真實的使用者語言,包括拼寫錯誤和非正式用語</span>
            </li>
            <!-- Running multiple times -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>多次運行:</strong> 由於 LLM 的隨機性,多次測試以獲得可靠結果</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- The optimization loop -->
    <section id="optimization-loop" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">優化循環</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- The optimization loop -->
          <p class="text-muted-foreground mb-4">
            使用迭代過程來改進描述:
          </p>
          <ol class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2 font-semibold">1.</span>
              <span>編寫初始描述</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">2.</span>
              <span>創建應該觸發和不應觸發的測試查詢</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">3.</span>
              <span>運行測試並記錄結果</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">4.</span>
              <span>分析失敗案例並調整描述</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 font-semibold">5.</span>
              <span>重複測試直到達到滿意的準確率</span>
            </li>
          </ol>
          <p class="text-sm text-muted-foreground mt-4">
            使用訓練/驗證分割來避免過度擬合特定測試案例。
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <ul class="space-y-3 text-muted-foreground">
        <li>
          <router-link to="/skill-creation/evaluating-skills" class="text-primary hover:underline">
            評估技能輸出品質
          </router-link>
          <span class="text-sm"> — 測試技能是否產生良好的輸出</span>
        </li>
        <li>
          <router-link to="/specification" class="text-primary hover:underline">
            規格說明
          </router-link>
          <span class="text-sm"> — 查看描述欄位的完整規範</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
