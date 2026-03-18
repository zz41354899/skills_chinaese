<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '快速開始',
  description: '創建你的第一個 Agent Skill 並在 VS Code 中看到它運作。',
  keywords: 'Agent Skills, 快速開始, 教學, VS Code, 創建技能'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'prerequisites', title: '前置需求', level: 2 },
  { id: 'create-skill', title: '創建技能', level: 2 },
  { id: 'try-it-out', title: '試用', level: 2 },
  { id: 'how-it-works', title: '運作原理', level: 2 },
  { id: 'next-steps', title: '下一步', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="快速開始" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Quickstart -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">快速開始</h1>
    <!-- Create your first Agent Skill and see it work in VS Code. -->
    <p class="text-xl text-muted-foreground mb-12">
      創建你的第一個 Agent Skill 並在 VS Code 中看到它運作。
    </p>

    <!-- Prerequisites -->
    <section id="prerequisites" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">前置需求</h2>
      <Card>
        <CardContent class="pt-6">
          <ul class="space-y-2 text-muted-foreground">
            <!-- VS Code with GitHub Copilot -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>安裝 <a href="https://code.visualstudio.com/" target="_blank" class="text-primary hover:underline">VS Code</a> 和 <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" target="_blank" class="text-primary hover:underline">GitHub Copilot</a></span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Create the skill -->
    <section id="create-skill" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">創建技能</h2>
      <Card class="mb-6">
        <CardContent class="pt-6">
          <!-- Create a SKILL.md file in the .agents/skills/ directory -->
          <p class="text-muted-foreground mb-4">
            在專案根目錄的 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">.agents/skills/</code> 目錄中創建一個新的技能檔案:
          </p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-4">
            <pre class="text-muted-foreground">.agents/skills/roll-dice/SKILL.md</pre>
          </div>
          <!-- Add the following content to SKILL.md -->
          <p class="text-muted-foreground mb-4">
            在 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">SKILL.md</code> 中添加以下內容:
          </p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-4">
            <pre class="text-muted-foreground">---
name: roll-dice
description: Roll dice with true randomness. Use when asked to roll a die (d6, d20, etc.), roll dice, or generate a random dice roll.
---

To roll a die, use the following command that generates a random number from 1 to the given number of sides:

```bash
shuf -i 1-&lt;sides&gt; -n 1
```

```powershell
Get-Random -Minimum 1 -Maximum (&lt;sides&gt; + 1)
```

Replace `&lt;sides&gt;` with the number of sides on the die (e.g., 6 for a standard die, 20 for a d20).</pre>
          </div>
          <!-- Explanation of the parts -->
          <p class="text-muted-foreground mb-2">
            這個檔案包含三個主要部分:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <!-- name — A short identifier for the skill. Must match the folder name. -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><code class="bg-muted px-1.5 py-0.5 rounded">name</code> — 技能的簡短識別符,必須與資料夾名稱匹配</span>
            </li>
            <!-- description — Tells the agent when to use this skill -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><code class="bg-muted px-1.5 py-0.5 rounded">description</code> — 告訴代理程式何時使用此技能,這是代理程式決定是否啟動它的依據</span>
            </li>
            <!-- The body — Instructions the agent follows when the skill activates -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>主體內容</strong> — 技能啟動時代理程式遵循的指令。在這裡,代理程式被指示使用終端命令生成隨機數字</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Try it out -->
    <section id="try-it-out" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">試用</h2>
      <Card>
        <CardContent class="pt-6">
          <ol class="space-y-3 text-muted-foreground">
            <!-- Open your project in VS Code -->
            <li class="flex items-start">
              <span class="mr-2 font-semibold">1.</span>
              <span>在 VS Code 中開啟你的專案</span>
            </li>
            <!-- Open the Copilot Chat panel -->
            <li class="flex items-start">
              <span class="mr-2 font-semibold">2.</span>
              <span>開啟 Copilot Chat 面板</span>
            </li>
            <!-- Select Agent mode -->
            <li class="flex items-start">
              <span class="mr-2 font-semibold">3.</span>
              <span>從聊天面板底部的模式下拉選單中選擇 Agent 模式</span>
            </li>
            <!-- Type /skills to confirm roll-dice appears -->
            <li class="flex items-start">
              <span class="mr-2 font-semibold">4.</span>
              <span>輸入 <code class="bg-muted px-1.5 py-0.5 rounded">/skills</code> 確認 <code class="bg-muted px-1.5 py-0.5 rounded">roll-dice</code> 出現在列表中。如果沒有,請檢查檔案是否位於專案根目錄的 <code class="bg-muted px-1.5 py-0.5 rounded">.agents/skills/roll-dice/SKILL.md</code></span>
            </li>
            <!-- Ask: "Roll a d20" -->
            <li class="flex items-start">
              <span class="mr-2 font-semibold">5.</span>
              <span>詢問:「Roll a d20」</span>
            </li>
          </ol>
        </CardContent>
      </Card>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">運作原理</h2>
      <div class="space-y-4">
        <!-- Discovery -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">1. 發現 (Discovery)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              當聊天會話開始時,代理程式掃描預設的技能目錄並找到你的技能。它只讀取 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">name</code> 和 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">description</code>,僅足以知道技能何時可能相關。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Activation -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">2. 啟動 (Activation)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              當你詢問關於擲骰子的問題時,代理程式將你的問題與技能的描述匹配,並將完整的 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">SKILL.md</code> 主體載入到上下文中。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Execution -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">3. 執行 (Execution)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              代理程式遵循主體中的指令,根據你的請求中的骰子面數調整終端命令。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <div class="space-y-3">
        <!-- Specification -->
        <router-link to="/specification" class="block text-foreground hover:text-primary transition-colors">
          <span class="font-semibold">規格說明</span>
          <span class="text-muted-foreground"> — 查看 scripts/ 目錄的完整規範</span>
        </router-link>

        <!-- Best practices -->
        <router-link to="/skill-creation/best-practices" class="block text-foreground hover:text-primary transition-colors">
          <span class="font-semibold">最佳實踐</span>
          <span class="text-muted-foreground"> — 學習如何有效使用腳本</span>
        </router-link>
      </div>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
