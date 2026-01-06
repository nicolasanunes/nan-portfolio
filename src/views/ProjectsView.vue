<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'

const { t, locale } = useI18n()

interface Project {
  id: number
  date: string
  name: string
  descriptionKey: string
  tags: string[]
  link: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    date: '2025-07',
    name: 'VOS - Voz Segura',
    descriptionKey: 'projects.descriptions.vos',
    tags: [
      'javascript',
      'typescript',
      'vue',
      'node',
      'postgresql',
      'tailwind',
      'figma',
      'axios',
      'css',
      'html',
      'jwt-token',
      'pinia',
      'vuetify',
      'vue-router',
    ],
    link: 'https://canalvos.com.br/',
  },
  {
    id: 2,
    date: '2025-08',
    name: 'Caring Hearths Christian Daycare',
    descriptionKey: 'projects.descriptions.caringHearts',
    tags: [
      'javascript',
      'vue',
      'firebase',
      'figma',
      'css',
      'html',
      'vue-router',
      'tailwind',
      'jwt-token',
      'nest',
      'node',
      'pinia',
      'typescript',
      'tw-elements',
      'postgresql',
      'sql',
    ],
    link: 'https://caringheartssf.com/',
  },
  {
    id: 3,
    date: '2026-01',
    name: 'Clínica Anary Crepaldi',
    descriptionKey: 'projects.descriptions.anarycrepaldi',
    tags: [
      'javascript',
      'vue',
      'firebase',
      'figma',
      'css',
      'html',
      'vue-router',
      'tailwind',
      'jwt-token',
      'nest',
      'node',
      'pinia',
      'typescript',
      'postgresql',
      'sql',
      'shadcn-vue',
      'inspira-ui',
      'axios',
    ],
    link: 'https://anarycrepaldi.com.br/',
  },
])

const selectedTags = ref<Set<string>>(new Set())

// Get all unique tags from projects
const allTags = computed(() => {
  const tagsSet = new Set<string>()
  projects.value.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
})

// Filter projects based on selected tags
const filteredProjects = computed(() => {
  if (selectedTags.value.size === 0) {
    return projects.value
  }

  return projects.value.filter((project) => {
    return Array.from(selectedTags.value).every((selectedTag) => project.tags.includes(selectedTag))
  })
})

const toggleTag = (tag: string) => {
  const newSet = new Set(selectedTags.value)
  if (newSet.has(tag)) {
    newSet.delete(tag)
  } else {
    newSet.add(tag)
  }
  selectedTags.value = newSet
}

const clearFilters = () => {
  selectedTags.value = new Set()
}

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const handleTagKeydown = (event: KeyboardEvent, tag: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleTag(tag)
  }
}
</script>

<template>
  <div class="min-h-screen py-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold font-orbitron mb-8">{{ t('projects.title') }}</h1>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        <!-- Sidebar with filters -->
        <aside class="lg:col-span-3">
          <div class="sticky top-8">
            <div
              class="lg:bg-card lg:rounded-lg lg:border lg:shadow-[0_0_20px_0_hsl(var(--primary)/0.2)] lg:hover:shadow-[0_0_30px_0_hsl(var(--primary)/0.3)] lg:transition-shadow lg:duration-300 pb-2 lg:p-6"
            >
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-orbitron font-semibold">{{ t('projects.filter') }}</h2>
                <button
                  v-if="selectedTags.size > 0"
                  @click="clearFilters"
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {{ t('projects.clear') }}
                </button>
              </div>

              <div class="flex flex-wrap gap-2 lg:flex-col lg:space-y-2 lg:gap-0">
                <button
                  v-for="tag in allTags"
                  :key="tag"
                  @click="toggleTag(tag)"
                  @keydown="handleTagKeydown($event, tag)"
                  :aria-pressed="selectedTags.has(tag)"
                  :aria-label="`Filter by ${tag}`"
                  class="px-4 py-2 text-xs rounded-full transition-all duration-200 lg:rounded-md lg:w-full lg:text-left text-center"
                  :class="[
                    selectedTags.has(tag)
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary hover:bg-secondary/80',
                  ]"
                >
                  <span class="font-medium">{{ tag }}</span>
                  <span v-if="selectedTags.has(tag)" class="ml-2" aria-hidden="true">✓</span>
                </button>
              </div>

              <div v-if="selectedTags.size > 0" class="mt-4 pt-4 border-t">
                <p class="text-sm text-muted-foreground">
                  {{
                    t('projects.projectsFound', {
                      count: filteredProjects.length,
                      plural: filteredProjects.length !== 1 ? 's' : '',
                    })
                  }}
                </p>
              </div>
            </div>
          </div>
        </aside>

        <!-- Projects list -->
        <main class="lg:col-span-9">
          <div class="space-y-6">
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              @click="openLink(project.link)"
              role="article"
              :aria-label="`Project: ${project.name}`"
              class="bg-card rounded-lg border p-6 shadow-[0_0_20px_0_hsl(var(--primary)/0.2)] hover:shadow-[0_0_30px_0_hsl(var(--primary)/0.3)] hover:bg-accent transition-all duration-200 relative cursor-pointer"
            >
              <!-- Icon -->
              <div
                class="absolute top-1 right-1 w-10 h-10 flex items-center justify-center text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>

              <div>
                <!-- Date -->
                <time :datetime="project.date" class="text-sm text-muted-foreground">
                  {{
                    new Date(project.date).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                    })
                  }}
                </time>

                <!-- Name -->
                <h3 class="text-2xl font-bold mt-2 mb-3 pr-12 font-orbitron">
                  {{ project.name }}
                </h3>

                <!-- Description -->
                <p class="text-muted-foreground mb-4 leading-relaxed">
                  {{ t(project.descriptionKey) }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in [...project.tags].sort()"
                    :key="tag"
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Empty state -->
            <div v-if="filteredProjects.length === 0" class="text-center py-12">
              <div class="invisible h-0 min-w-[960px]" aria-hidden="true"></div>
              <p class="text-muted-foreground text-lg">
                {{ t('projects.noProjectsFound') }}
              </p>
              <button @click="clearFilters" class="mt-4 text-primary hover:underline">
                {{ t('projects.clearFilters') }}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
time {
  font-variant-numeric: tabular-nums;
}
</style>
