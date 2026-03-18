<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '添加技能支援',
  description: '為 AI 代理程式或開發工具添加 Agent Skills 支援的指南。',
  keywords: 'Agent Skills, 客戶端實作, API, 整合'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'core-principle', title: '核心原則', level: 2 },
  { id: 'discover-skills', title: '步驟 1: 發現技能', level: 2 },
  { id: 'parse-skillmd', title: '步驟 2: 解析 SKILL.md', level: 2 },
  { id: 'disclose-skills', title: '步驟 3: 揭露技能', level: 2 },
  { id: 'activate-skills', title: '步驟 4: 啟動技能', level: 2 },
  { id: 'manage-context', title: '步驟 5: 管理上下文', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="添加技能支援" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- How to add skills support to your agent -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">如何為你的代理程式添加技能支援</h1>
    <!-- A guide for adding Agent Skills support to an AI agent or development tool. -->
    <p class="text-xl text-muted-foreground mb-12">
      為 AI 代理程式或開發工具添加 Agent Skills 支援的指南。
    </p>

    <!-- The core principle: progressive disclosure -->
    <section id="core-principle" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">核心原則:漸進式揭露</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- The core principle: progressive disclosure -->
          <p class="text-muted-foreground mb-4">
            Agent Skills 使用漸進式揭露來管理上下文:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>啟動時只載入技能的 <code class="bg-muted px-1 py-0.5 rounded text-xs">name</code> 和 <code class="bg-muted px-1 py-0.5 rounded text-xs">description</code></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>當任務與技能描述匹配時,才載入完整的 <code class="bg-muted px-1 py-0.5 rounded text-xs">SKILL.md</code> 內容</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>這種方法讓代理程式能夠訪問大量技能而不會耗盡上下文</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Step 1: Discover skills -->
    <section id="discover-skills" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">步驟 1: 發現技能</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Step 1: Discover skills -->
          <p class="text-muted-foreground mb-4">
            在啟動時掃描技能目錄:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>掃描位置:</strong> <code class="bg-muted px-1 py-0.5 rounded text-xs">.agents/skills/</code> 相對於專案根目錄</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>尋找內容:</strong> 包含 <code class="bg-muted px-1 py-0.5 rounded text-xs">SKILL.md</code> 檔案的目錄</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>處理名稱衝突:</strong> 技能名稱必須唯一,後載入的同名技能應被忽略</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>信任考量:</strong> 只載入使用者明確添加到專案的技能</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Step 2: Parse SKILL.md files -->
    <section id="parse-skillmd" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">步驟 2: 解析 SKILL.md 檔案</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Step 2: Parse SKILL.md files -->
          <p class="text-muted-foreground mb-4">
            解析 SKILL.md 檔案的結構:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>Frontmatter 提取:</strong> 使用 YAML 解析器提取元數據</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>處理格式錯誤的 YAML:</strong> 優雅地處理解析錯誤並記錄警告</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>寬鬆驗證:</strong> 只驗證必需欄位 (<code class="bg-muted px-1 py-0.5 rounded text-xs">name</code> 和 <code class="bg-muted px-1 py-0.5 rounded text-xs">description</code>)</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>儲存內容:</strong> 保存 name、description 和檔案路徑供後續使用</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Step 3: Disclose available skills to the model -->
    <section id="disclose-skills" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">步驟 3: 向模型揭露可用技能</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Step 3: Disclose available skills to the model -->
          <p class="text-muted-foreground mb-4">
            在系統提示中提供技能目錄:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>建立技能目錄:</strong> 列出所有可用技能的 name 和 description</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>放置位置:</strong> 將目錄放在系統提示的開頭或結尾</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>行為指令:</strong> 告訴模型如何以及何時使用技能</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>過濾:</strong> 可選地根據上下文過濾顯示的技能</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Step 4: Activate skills -->
    <section id="activate-skills" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">步驟 4: 啟動技能</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Step 4: Activate skills -->
          <p class="text-muted-foreground mb-4">
            當技能相關時載入完整內容:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>模型驅動啟動:</strong> 讓模型決定何時需要技能</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>使用者明確啟動:</strong> 允許使用者直接請求特定技能</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>模型接收內容:</strong> 將完整的 SKILL.md 內容添加到上下文</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>列出打包資源:</strong> 告知模型可用的 scripts/ 和 references/ 檔案</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Step 5: Manage skill context over time -->
    <section id="manage-context" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">步驟 5: 隨時間管理技能上下文</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Step 5: Manage skill context over time -->
          <p class="text-muted-foreground mb-4">
            在長時間對話中管理技能上下文:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>保護技能內容:</strong> 在上下文壓縮時保留活動技能的內容</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>去重啟動:</strong> 避免多次載入相同的技能</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>子代理委派(可選):</strong> 考慮在單獨的上下文中運行技能</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <ul class="space-y-3 text-muted-foreground">
        <li>
          <router-link to="/specification" class="text-primary hover:underline">
            規格說明
          </router-link>
          <span class="text-sm"> — 查看完整的 SKILL.md 格式規範</span>
        </li>
        <li>
          <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            GitHub 儲存庫
          </a>
          <span class="text-sm"> — 查看參考實作和範例</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
