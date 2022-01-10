import { acceptHMRUpdate, defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

export const useStore = defineStore('store', () => {
  const articles = ref<Article[]>([])
  const title = ref('')

  // const init = (routes: RouteRecordRaw[]) => {
  //   articles.value = routes.filter(({ path }) => path.match(/(posts|sheets|notes)\/.+/))?.map(route => route!.children![0]!.meta! as unknown as Article).sort((a, b) => b.timestamp - a.timestamp)
  //   // for (const genre of ['posts', 'sheets', 'notes'])
  //   //   articles[genre as 'posts'|'sheets'|'notes'].push(...(routes.filter(({ path }) => path.startsWith(`/${genre}/`)).map(route => route!.children![0]!.meta! as unknown as Article)).sort((a, b) => b.timestamp - a.timestamp))
  // }
  // watch(router, generateArticles)

  const setTitle = (text?: string) => { title.value = text ? `${text} | Pak` : 'Pak' }

  const generateArticles = (
    routes: RouteRecordRaw[],
  ) => {
    articles.value = (
      routes
        .filter(({ path }) => path.match(/(posts|sheets|notes)\/.+/))
        ?.map(route => route!.children![0]!.meta! as unknown as Article)
        .sort((a: Article, b: Article) => b.timestamp - a.timestamp)
    )
  }

  return {
    articles,
    title,
    setTitle,
    generateArticles,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
