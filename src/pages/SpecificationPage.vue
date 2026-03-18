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
  title: '規格說明',
  description: 'Agent Skills 的完整格式規範。',
  keywords: 'Agent Skills, 規格, SKILL.md, 格式說明'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'directory-structure', title: '目錄結構', level: 2 },
  { id: 'skill-md-format', title: 'SKILL.md 格式', level: 2 },
  { id: 'frontmatter', title: 'Frontmatter', level: 3 },
  { id: 'body-content', title: 'Body 內容', level: 3 },
  { id: 'optional-directories', title: '選填目錄', level: 2 },
  { id: 'other-features', title: '其他功能', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="規格說明" @toggle-sidebar="emit('toggleSidebar')" />
      
    <!-- Specification -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">規格說明</h1>
    <!-- The complete format specification for Agent Skills. -->
    <p class="text-xl text-muted-foreground mb-12">
      Agent Skills 的完整格式規範。
    </p>

    <!-- Directory structure -->
    <section id="directory-structure" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">目錄結構</h2>
      <Card>
        <CardContent class="pt-6">
          <p class="text-muted-foreground mb-4">
            每個技能都必須包含一個 <code class="bg-muted px-1.5 py-0.5 rounded text-sm">SKILL.md</code> 檔案:
          </p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre class="text-muted-foreground">skill-name/
├── SKILL.md          # 必需: 元數據 + 指令
├── scripts/          # 選填: 可執行程式碼
├── references/       # 選填: 文件
├── assets/           # 選填: 模板、資源
└── ...               # 任何其他檔案或目錄</pre>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- SKILL.md format -->
    <section id="skill-md-format" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">SKILL.md 格式</h2>

      <!-- Frontmatter -->
      <h3 id="frontmatter" class="text-xl font-bold mb-4">Frontmatter</h3>
      <Card class="mb-6">
        <CardContent class="pt-6">
          <p class="text-muted-foreground mb-4">
            <code class="bg-muted px-1.5 py-0.5 rounded text-sm">name</code> 和 
            <code class="bg-muted px-1.5 py-0.5 rounded text-sm">description</code> 是必需欄位:
          </p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs mb-4 overflow-x-auto">
            <pre class="text-muted-foreground">---
name: skill-name
description: 此技能的功能描述以及何時使用它。
---</pre>
          </div>
          <p class="text-muted-foreground mb-4">範例:</p>
          <div class="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre class="text-muted-foreground">---
name: pdf-processing
description: 提取 PDF 文字、填寫表單、合併檔案。處理 PDF 時使用。
license: Apache-2.0
metadata:
  author: example-org
  version: "1.0"
---</pre>
          </div>
        </CardContent>
      </Card>

      <div class="space-y-4 mb-8">
        <!-- name field -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">name 欄位</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="mb-3">
              <code class="bg-muted px-1.5 py-0.5 rounded text-sm">name</code> 欄位必須:
            </CardDescription>
            <!-- Must be 1-64 characters -->
            <!-- May only contain unicode lowercase alphanumeric characters (a-z) and hyphens (-) -->
            <!-- Must not start or end with a hyphen (-) -->
            <!-- Must not contain consecutive hyphens (--) -->
            <!-- Must match the parent directory name -->
            <ul class="text-sm text-muted-foreground space-y-1 mb-3">
              <li>• 長度為 1-64 個字元</li>
              <li>• 只能包含 Unicode 小寫字母 (a-z) 和連字符 (-)</li>
              <li>• 不能以連字符開頭或結尾</li>
              <li>• 不能包含連續的連字符 (--)</li>
              <li>• 必須與父目錄名稱匹配</li>
            </ul>
            <div class="bg-muted/50 rounded p-3 font-mono text-xs">
              <div class="text-green-600 mb-1">✓ name: pdf-processing</div>
              <div class="text-green-600 mb-1">✓ name: data-analysis</div>
              <div class="text-red-600 mb-1">✗ name: PDF-Processing  # 不允許大寫</div>
              <div class="text-red-600">✗ name: pdf--processing  # 不允許連續連字符</div>
            </div>
          </CardContent>
        </Card>

        <!-- description field -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">description 欄位</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="mb-3">
              <code class="bg-muted px-1.5 py-0.5 rounded text-sm">description</code> 欄位必須:
            </CardDescription>
            <!-- Must be 1-1024 characters -->
            <!-- Should describe both what the skill does and when to use it -->
            <!-- Should include specific keywords that help agents identify relevant tasks -->
            <ul class="text-sm text-muted-foreground space-y-1 mb-3">
              <li>• 長度為 1-1024 個字元</li>
              <li>• 描述技能的功能和使用時機</li>
              <li>• 包含幫助代理程式識別相關任務的關鍵字</li>
            </ul>
            <div class="bg-muted/50 rounded p-3 font-mono text-xs">
              <div class="text-green-600 mb-2">✓ description: 從 PDF 檔案中提取文字和表格,填寫 PDF 表單,合併多個 PDF。處理 PDF 文件或當使用者提到 PDF、表單或文件提取時使用。</div>
              <div class="text-red-600">✗ description: 幫助處理 PDF。  # 太簡略</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Body content -->
      <h3 id="body-content" class="text-xl font-bold mb-4">Body 內容</h3>
      <Card class="mb-8">
        <CardContent class="pt-6">
          <p class="text-muted-foreground mb-4">
            Frontmatter 之後的 Markdown 內容應包含:
          </p>
          <ul class="text-muted-foreground space-y-2">
            <!-- Step-by-step instructions -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>逐步指令</span>
            </li>
            <!-- Examples of inputs and outputs -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>輸入和輸出範例</span>
            </li>
            <!-- Common edge cases -->
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>常見的邊界情況</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <!-- Optional directories -->
    <section id="optional-directories" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">選填目錄</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <!-- scripts/ -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">scripts/</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-sm">
              包含技能可以執行的程式碼檔案。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- references/ -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">references/</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-sm">
              包含技能可以引用的文件和參考資料。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- assets/ -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">assets/</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-sm">
              包含模板、圖片或其他資源檔案。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Other features -->
    <section id="other-features" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">其他功能</h2>
      <div class="space-y-4">
        <!-- Progressive disclosure -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">漸進式揭露</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              代理程式在啟動時只載入名稱和描述,僅在需要時才載入完整的指令和資源。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- File references -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">檔案引用</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              技能可以引用其目錄中的其他檔案,用於文件、程式碼或資源。
            </CardDescription>
          </CardContent>
        </Card>

        <!-- Validation -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">驗證</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              使用參考函式庫來驗證技能格式並產生提示 XML。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
