<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import PageHeader from '@/components/PageHeader.vue'
import { MapPin, FileText, Settings, Code, Wrench, ExternalLink } from 'lucide-vue-next'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: '概覽',
  description: 'Agent Skills 是一個簡單、開放的格式,為 AI 代理程式提供新的能力和專業知識。',
  keywords: 'Agent Skills, AI, 代理程式, 概覽, 開放格式'
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const tocItems = [
  { id: 'why-agent-skills', title: '為什麼選擇 Agent Skills?', level: 2 },
  { id: 'what-can-enable', title: 'Agent Skills 能實現什麼?', level: 2 },
  { id: 'adoption', title: '使用情況', level: 2 },
  { id: 'open-development', title: '開源社群', level: 2 },
  { id: 'get-started', title: '開始使用', level: 2 },
]
</script>

<template>
  <div class="flex flex-1 overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto px-6 md:px-12 py-6 md:py-12 max-w-3xl">
      <PageHeader title="概覽" @toggle-sidebar="emit('toggleSidebar')" />
      
    <div class="mb-16">
      <!-- Overview -->
      <h1 class="text-4xl md:text-5xl font-bold mb-4">概覽</h1>
      <!-- A simple, open format for giving agents new capabilities and expertise. -->
      <p class="text-xl text-muted-foreground">
        一個簡單、開放的格式,為代理程式提供新的能力和專業知識。
      </p>
    </div>

    <!-- Why Agent Skills? -->
    <section id="why-agent-skills" class="mb-16">
      <h2 class="text-2xl font-bold mb-6">為什麼選擇 Agent Skills?</h2>
      <Card>
        <CardContent class="pt-6">
          <p class="text-muted-foreground leading-relaxed">
            Agent Skills 提供了一個標準化的方式來擴展 AI 代理程式的能力。透過簡單的格式定義,
            您可以輕鬆地為代理程式添加新的技能、知識和工作流程。
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- What can Agent Skills enable? -->
    <section id="what-can-enable" class="mb-16">
      <h2 class="text-2xl font-bold mb-6">Agent Skills 能實現什麼?</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Domain expertise -->
        <Card class="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle class="text-lg">領域專業知識</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Package specialized knowledge into reusable instructions, from legal review processes to data analysis pipelines. -->
            <CardDescription>
              將專業知識打包成可重複使用的指令,從法律審查流程到資料分析管道。
            </CardDescription>
          </CardContent>
        </Card>
        
        <!-- New capabilities -->
        <Card class="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle class="text-lg">新功能</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Give agents new capabilities (e.g. creating presentations, building MCP servers, analyzing datasets). -->
            <CardDescription>
              為代理程式提供新的能力(例如:建立簡報、建構 MCP 伺服器、分析資料集)。
            </CardDescription>
          </CardContent>
        </Card>
        
        <!-- Repeatable workflows -->
        <Card class="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle class="text-lg">可重複的工作流程</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Turn multi-step tasks into consistent and auditable workflows. -->
            <CardDescription>
              將多步驟任務轉化為一致且可審計的工作流程。
            </CardDescription>
          </CardContent>
        </Card>
        
        <!-- Interoperability -->
        <Card class="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle class="text-lg">互通性</CardTitle>
          </CardHeader>
          <CardContent>
            <!-- Reuse the same skill across different skills-compatible agent products. -->
            <CardDescription>
              在不同的支援技能的代理程式產品中重複使用相同的技能。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Adoption -->
    <section id="adoption" class="mb-16">
      <h2 class="text-2xl font-bold mb-6">使用情況</h2>
      <Card>
        <CardContent class="pt-6">
          <p class="text-muted-foreground leading-relaxed mb-4">
            Agent Skills 正在被越來越多的開發者和組織採用,用於建構更強大、更靈活的 AI 代理程式系統。
          </p>
          <p class="text-muted-foreground leading-relaxed">
            這個開放格式確保了不同平台和工具之間的互通性,讓技能可以在整個生態系統中共享和重複使用。
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Open development -->
    <section id="open-development" class="mb-16">
      <h2 class="text-2xl font-bold mb-6">開源社群</h2>
      <Card>
        <CardContent class="pt-6">
          <p class="text-muted-foreground leading-relaxed mb-6">
            Agent Skills 是一個開源專案,歡迎社群貢獻和回饋。
          </p>
          <div class="flex flex-wrap gap-3">
            <!-- Anthropic -->
            <a 
              href="https://www.anthropic.com/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                由 Anthropic 提供支援
              </Button>
            </a>
            <!-- View on GitHub -->
            <a 
              href="https://github.com/agentskills/agentskills" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                在 GitHub 上查看
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- Get started -->
    <section id="get-started" class="mb-16">
      <h2 class="text-2xl font-bold mb-6">開始使用</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <!-- What are skills? -->
        <router-link to="/what-are-skills">
          <Card class="h-full hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent class="pt-6">
              <MapPin class="h-8 w-8 mb-4 text-muted-foreground" />
              <CardTitle class="text-lg mb-2">什麼是技能?</CardTitle>
              <CardDescription>了解技能、它們如何運作以及為什麼重要。</CardDescription>
            </CardContent>
          </Card>
        </router-link>
        
        <!-- Specification -->
        <router-link to="/specification">
          <Card class="h-full hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent class="pt-6">
              <FileText class="h-8 w-8 mb-4 text-muted-foreground" />
              <CardTitle class="text-lg mb-2">規格說明</CardTitle>
              <CardDescription>SKILL.md 檔案的完整格式規範。</CardDescription>
            </CardContent>
          </Card>
        </router-link>
        
        <!-- Add skills support -->
        <router-link to="/client-implementation/adding-skills-support">
          <Card class="h-full hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent class="pt-6">
              <Settings class="h-8 w-8 mb-4 text-muted-foreground" />
              <CardTitle class="text-lg mb-2">添加技能支援</CardTitle>
              <CardDescription>為你的代理程式或工具添加技能支援。</CardDescription>
            </CardContent>
          </Card>
        </router-link>
        
        <!-- Example skills -->
        <a 
          href="https://github.com/agentskills/agentskills"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <Card class="h-full hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent class="pt-6">
              <div class="flex items-center justify-between mb-4">
                <Code class="h-8 w-8 text-muted-foreground" />
                <ExternalLink class="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle class="text-lg mb-2">範例技能</CardTitle>
              <CardDescription>在 GitHub 上瀏覽範例技能。</CardDescription>
            </CardContent>
          </Card>
        </a>
        
        <!-- Reference library -->
        <a 
          href="https://github.com/agentskills/agentskills/tree/main/skills-ref"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <Card class="h-full hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent class="pt-6">
              <div class="flex items-center justify-between mb-4">
                <Wrench class="h-8 w-8 text-muted-foreground" />
                <ExternalLink class="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle class="text-lg mb-2">參考函式庫</CardTitle>
              <CardDescription>驗證技能並產生提示 XML。</CardDescription>
            </CardContent>
          </Card>
        </a>
      </div>
    </section>
      </div>
    </main>
    <TableOfContents :items="tocItems" />
  </div>
</template>
