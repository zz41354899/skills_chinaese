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
  title: '什麼是技能?',
  description: 'Agent Skills 是一個輕量級、開放的格式,用於擴展 AI 代理程式的能力,提供專業知識和工作流程。',
  keywords: 'Agent Skills, 技能, AI 能力, SKILL.md, 工作流程'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'how-skills-work', title: '技能如何運作', level: 2 },
  { id: 'skill-md-file', title: 'SKILL.md 檔案', level: 2 },
  { id: 'next-steps', title: '下一步', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="什麼是技能?" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- What are skills? -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">什麼是技能?</h1>
    <!-- Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows. -->
    <p class="text-xl text-muted-foreground mb-12">
      Agent Skills 是一個輕量級、開放的格式,用於擴展 AI 代理程式的能力,提供專業知識和工作流程。
    </p>

    <Card class="mb-8">
      <CardContent class="pt-6">
        <p class="text-muted-foreground leading-relaxed mb-4">
          Agent Skills 是一種結構化的方式,用於定義 AI 代理程式可以執行的特定任務或能力。
          每個技能都包含了執行該任務所需的指令、參數和預期輸出。
        </p>
        <!-- SKILL.md -->
        <div class="bg-muted/50 rounded-md p-4 font-mono text-sm mb-4">
          <div class="text-muted-foreground">SKILL.md</div>
        </div>
        <p class="text-muted-foreground leading-relaxed mb-4">
          每個技能都有 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">name</code> 和 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">description</code>,
          讓代理程式知道何時使用它。
        </p>
        <div class="bg-muted/50 rounded-md p-4 font-mono text-sm">
          <pre class="text-xs text-muted-foreground overflow-x-auto">my-skill/
├── SKILL.md          # 必需: 指令 + 元數據
├── scripts/          # 選填: 可執行程式碼
├── references/       # 選填: 文件
└── assets/           # 選填: 模板、資源</pre>
        </div>
      </CardContent>
    </Card>

    <!-- How skills work -->
    <section id="how-skills-work" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">技能如何運作</h2>
      <div class="space-y-4">
        <!-- Discovery -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">1. 發現</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- At startup, agents load only the name and description of each available skill, just enough to know when it might be relevant. -->
            <CardDescription>
              啟動時,代理程式只載入每個可用技能的名稱和描述,剛好足以知道何時可能相關。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Activation -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">2. 啟動</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- When a task matches a skill's description, the agent reads the full SKILL.md instructions into context. -->
            <CardDescription>
              當任務與技能的描述匹配時,代理程式將完整的 SKILL.md 指令讀入上下文。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Execution -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">3. 執行</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- The agent follows the instructions, optionally loading referenced files or executing bundled code as needed. -->
            <CardDescription>
              代理程式遵循指令,根據需要選擇性地載入引用的檔案或執行捆綁的程式碼。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- The SKILL.md file -->
    <section id="skill-md-file" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">SKILL.md 檔案</h2>
      <Card class="mb-6">
        <CardContent class="pt-6">
          <p class="text-muted-foreground mb-4">
            <code class="bg-muted px-1.5 py-0.5 rounded text-sm">SKILL.md</code> 檔案是每個技能的核心,包含:
          </p>
          <ul class="space-y-2 text-muted-foreground">
            <!-- name: A short identifier -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>name:</strong> 簡短的識別碼</span>
            </li>
            <!-- description: When to use this skill -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>description:</strong> 何時使用此技能</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div class="bg-muted/50 rounded-lg p-6 font-mono text-xs mb-6 overflow-x-auto">
        <pre class="text-muted-foreground">---
name: pdf-processing
description: 提取 PDF 文字、填寫表單、合併檔案。處理 PDF 時使用。
---

# PDF 處理

## 何時使用此技能
當使用者需要處理 PDF 檔案時使用此技能...

## 如何提取文字
1. 使用 pdfplumber 進行文字提取...

## 如何填寫表單
...</pre>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <!-- Self-documenting -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">自我記錄</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- A skill author or user can read a SKILL.md and understand what it does, making skills easy to audit and improve. -->
            <CardDescription class="text-sm">
              技能作者或使用者可以閱讀 SKILL.md 並理解它的作用,使技能易於審核和改進。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Extensible -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">可擴展</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Skills can range in complexity from just text instructions to executable code, assets, and templates. -->
            <CardDescription class="text-sm">
              技能的複雜度可以從純文字指令到可執行程式碼、資源和模板。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Portable -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">可攜帶</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Skills are just files, so they're easy to edit, version, and share. -->
            <CardDescription class="text-sm">
              技能只是檔案,因此易於編輯、版本控制和分享。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Next steps -->
    <section id="next-steps" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">下一步</h2>
      <ul class="space-y-3 text-muted-foreground">
        <!-- View the specification -->
        <li>
          <router-link to="/specification" class="text-primary hover:underline">
            查看規格說明
          </router-link>
          <span class="text-sm"> — 了解完整的格式規範</span>
        </li>
        <!-- Add skills support to your agent -->
        <li>
          <router-link to="/client-implementation/adding-skills-support" class="text-primary hover:underline">
            為你的代理程式添加技能支援
          </router-link>
          <span class="text-sm"> — 建構相容的客戶端</span>
        </li>
        <!-- See example skills -->
        <li>
          <a href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            查看範例技能
          </a>
          <span class="text-sm"> — 在 GitHub 上探索範例</span>
        </li>
        <!-- Read authoring best practices -->
        <li>
          <a href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            閱讀編寫最佳實踐
          </a>
          <span class="text-sm"> — 撰寫有效技能的指南</span>
        </li>
        <!-- Use the reference library -->
        <li>
          <a href="https://github.com/agentskills/agentskills/tree/main/skills-ref" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            使用參考函式庫
          </a>
          <span class="text-sm"> — 驗證技能並產生提示 XML</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
