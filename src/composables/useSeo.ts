import { watch } from 'vue'
import { useRoute } from 'vue-router'

interface SeoOptions {
  title: string
  description?: string
  keywords?: string
}

export function useSeo(options: SeoOptions) {
  const route = useRoute()
  
  const updateMeta = () => {
    // 更新標題
    document.title = `${options.title} - Agent Skills`
    
    // 更新 description
    if (options.description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', options.description)
      
      // 更新 OG description
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', options.description)
      }
      
      // 更新 Twitter description
      let twitterDescription = document.querySelector('meta[property="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', options.description)
      }
    }
    
    // 更新 keywords
    if (options.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', options.keywords)
    }
    
    // 更新 OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', `${options.title} - Agent Skills`)
    }
    
    // 更新 Twitter title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${options.title} - Agent Skills`)
    }
  }
  
  // 初始化時更新
  updateMeta()
  
  // 路由變化時也更新
  watch(() => route.path, updateMeta)
}
