<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '在技能中使用腳本',
  description: '如何在技能中運行命令和打包可執行腳本。',
  keywords: 'Agent Skills, 腳本, 命令, 自動化'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'one-off-commands', title: '一次性命令', level: 2 },
  { id: 'referencing-scripts', title: '引用腳本', level: 2 },
  { id: 'self-contained-scripts', title: '自包含腳本', level: 2 },
  { id: 'designing-scripts', title: '設計腳本', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="在技能中使用腳本" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Using scripts in skills -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">在技能中使用腳本</h1>
    <!-- How to run commands and bundle executable scripts in your skills. -->
    <p class="text-xl text-muted-foreground mb-12">
      如何在技能中運行命令和打包可執行腳本。
    </p>

    <!-- One-off commands -->
    <section id="one-off-commands" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">一次性命令</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- One-off commands -->
          <p class="text-muted-foreground mb-4">
            在 SKILL.md 中直接引用命令,無需將它們放入 <code class="bg-muted px-1 py-0.5 rounded text-xs">scripts/</code> 目錄:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>uvx / pipx:</strong> Python 工具的一次性執行</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>npx / bunx:</strong> Node.js 工具的一次性執行</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>deno run:</strong> Deno 套件的一次性執行</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>go run:</strong> Go 工具的一次性執行</span>
            </li>
          </ul>
          <p class="text-sm text-muted-foreground mt-4">
            提示: 固定版本(例如 <code class="bg-muted px-1 py-0.5 rounded text-xs">npx eslint@9.0.0</code>)以確保命令行為一致。
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Referencing scripts from SKILL.md -->
    <section id="referencing-scripts" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">從 SKILL.md 引用腳本</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Referencing scripts from SKILL.md -->
          <p class="text-muted-foreground mb-4">
            在 SKILL.md 中記錄可用的腳本:
          </p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-4">
            <pre class="text-muted-foreground">## 可用腳本

- **`scripts/validate.sh`** — 驗證配置檔案
- **`scripts/process.py`** — 處理輸入資料

## 工作流程

1. 運行驗證腳本:
   ```bash
   bash scripts/validate.sh "$INPUT_FILE"
   ```

2. 處理結果:
   ```bash
   python3 scripts/process.py --input results.json
   ```</pre>
          </div>
          <p class="text-sm text-muted-foreground">
            將複雜命令移至腳本中,使其更可靠且易於測試。
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Self-contained scripts -->
    <section id="self-contained-scripts" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">自包含腳本</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Self-contained scripts -->
          <p class="text-muted-foreground mb-4">
            使用內聯依賴聲明創建自包含腳本:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>Python (PEP 723):</strong> 使用 <code class="bg-muted px-1 py-0.5 rounded text-xs">uv run</code> 或 <code class="bg-muted px-1 py-0.5 rounded text-xs">pipx run</code> 執行帶有內聯依賴的腳本</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>Deno:</strong> 在 import 語句中使用 <code class="bg-muted px-1 py-0.5 rounded text-xs">npm:</code> 或 <code class="bg-muted px-1 py-0.5 rounded text-xs">jsr:</code> 指定符</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>Bun:</strong> 在 import 中直接指定版本,無需 package.json</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>Ruby:</strong> 使用 <code class="bg-muted px-1 py-0.5 rounded text-xs">bundler/inline</code> 在腳本中聲明 gem</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Designing scripts for agentic use -->
    <section id="designing-scripts" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">設計供代理程式使用的腳本</h2>
      <Card>
        <CardContent class="pt-6">
          <!-- Designing scripts for agentic use -->
          <p class="text-muted-foreground mb-4">
            使腳本易於代理程式使用:
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>避免互動式提示:</strong> 使用命令列參數而非互動式輸入</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>使用 --help 記錄用法:</strong> 提供清晰的幫助文字說明如何使用腳本</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>編寫有用的錯誤訊息:</strong> 明確說明出了什麼問題以及如何修復</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span><strong>使用結構化輸出:</strong> 輸出 JSON 或其他易於解析的格式</span>
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
          <span class="text-sm"> — 查看 scripts/ 目錄的完整規範</span>
        </li>
        <li>
          <router-link to="/skill-creation/best-practices" class="text-primary hover:underline">
            最佳實踐
          </router-link>
          <span class="text-sm"> — 學習如何有效使用腳本</span>
        </li>
      </ul>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
