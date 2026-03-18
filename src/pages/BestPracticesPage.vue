<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '最佳實踐',
  description: '如何編寫範圍明確且針對任務校準的技能。',
  keywords: 'Agent Skills, 最佳實踐, 技能創建, 指令模式'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'start-from-expertise', title: '從真實專業知識開始', level: 2 },
  { id: 'spending-context', title: '明智使用上下文', level: 2 },
  { id: 'calibrating-control', title: '校準控制程度', level: 2 },
  { id: 'effective-patterns', title: '有效的指令模式', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="最佳實踐" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Best practices for skill creators -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">給技能創建者的最佳實踐</h1>
    <!-- How to write skills that are well-scoped and calibrated to the task. -->
    <p class="text-xl text-muted-foreground mb-12">
      如何編寫範圍明確且針對任務校準的技能。
    </p>

    <!-- Start from real expertise -->
    <section id="start-from-expertise" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">從真實專業知識開始</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Start from real expertise -->
          <p class="text-muted-foreground mb-4">
            最好的技能來自真實的專業知識和實際經驗:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Extract from a hands-on task -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>從實際任務中提取:</strong> 記錄成功的步驟、你做的修正、輸入/輸出格式</span>
            </li>
            <!-- Synthesize from existing project artifacts -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>從現有專案資料合成:</strong> 內部文件、API 規格、程式碼審查評論、版本控制歷史</span>
            </li>
            <!-- Refine with real execution -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>透過實際執行改進:</strong> 使用評估來測試和迭代你的技能</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Spending context wisely -->
    <section id="spending-context" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">明智使用上下文</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Spending context wisely -->
          <p class="text-muted-foreground mb-4">
            SKILL.md 會載入到代理程式的上下文中,因此要明智使用:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Add what the agent lacks, omit what it knows -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>添加代理程式缺少的,省略它已知的:</strong> 不要解釋基本概念,直接提供特定的指令</span>
            </li>
            <!-- Design coherent units -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>設計連貫的單元:</strong> 每個技能應該是一個完整的功能單元</span>
            </li>
            <!-- Aim for moderate detail -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>適度詳細:</strong> 提供足夠的細節讓代理程式成功,但不要過度詳細</span>
            </li>
            <!-- Structure large skills with progressive disclosure -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>使用漸進式揭露:</strong> 大型技能可以將詳細內容放在 <code class="bg-muted px-1 py-0.5 rounded text-xs">references/</code> 目錄</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Calibrating control -->
    <section id="calibrating-control" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">校準控制程度</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Calibrating control -->
          <p class="text-muted-foreground mb-4">
            平衡指令的具體程度:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Match specificity to fragility -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>根據脆弱性調整具體程度:</strong> 關鍵操作需要詳細步驟,常規任務可以更靈活</span>
            </li>
            <!-- Provide defaults, not menus -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>提供預設值而非選單:</strong> 給出建議的方法,而不是列出所有可能選項</span>
            </li>
            <!-- Favor procedures over declarations -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>偏好程序而非聲明:</strong> 告訴代理程式「做什麼」而不只是「是什麼」</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Patterns for effective instructions -->
    <section id="effective-patterns" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">有效的指令模式</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Patterns for effective instructions -->
          <p class="text-muted-foreground mb-4">
            使用這些模式來改進你的技能指令:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- Gotchas sections -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>陷阱區塊:</strong> 記錄常見錯誤和如何避免它們</span>
            </li>
            <!-- Templates for output format -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>輸出格式模板:</strong> 提供具體的輸出格式範例</span>
            </li>
            <!-- Checklists for multi-step workflows -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>多步驟工作流程檢查清單:</strong> 將複雜任務分解為清晰的步驟</span>
            </li>
            <!-- Validation loops -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>驗證循環:</strong> 指示代理程式在繼續前檢查結果</span>
            </li>
            <!-- Bundling reusable scripts -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>打包可重用腳本:</strong> 將複雜邏輯放入 <code class="bg-muted px-1 py-0.5 rounded text-xs">scripts/</code> 目錄</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <ul class="space-y-3 text-muted-foreground">
        <!-- Optimizing skill descriptions -->
        <li>
          <router-link to="/skill-creation/optimizing-descriptions" class="text-primary hover:underline">
            優化技能描述
          </router-link>
          <span class="text-sm"> — 改進描述以確保技能在正確的提示下觸發</span>
        </li>
        <!-- Evaluating skill output quality -->
        <li>
          <router-link to="/skill-creation/evaluating-skills" class="text-primary hover:underline">
            評估技能輸出品質
          </router-link>
          <span class="text-sm"> — 使用評估驅動的迭代測試技能</span>
        </li>
        <!-- Using scripts in skills -->
        <li>
          <router-link to="/skill-creation/using-scripts" class="text-primary hover:underline">
            在技能中使用腳本
          </router-link>
          <span class="text-sm"> — 為複雜操作添加可執行程式碼</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
