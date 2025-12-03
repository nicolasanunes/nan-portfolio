<script setup lang="ts">
import Button from './ui/button/Button.vue'
import { GradientButton } from './ui/gradient-button'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'
import { useI18n } from 'vue-i18n'
import { Moon, Sun, Languages, Menu, X } from 'lucide-vue-next'
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'

// Satisfy vue/multi-word-component-names rule without changing file name
defineOptions({ name: 'AppNavbar' })

const theme = useThemeStore()
const localeStore = useLocaleStore()
const { locale, t } = useI18n()
const mobileMenuOpen = ref(false)
const router = useRouter()

// Sincroniza o locale do i18n com o store
watch(
  () => localeStore.locale,
  (newLocale) => {
    locale.value = newLocale
    // Atualiza o título quando o idioma mudar
    const titleKey = router.currentRoute.value.meta.titleKey as string
    if (titleKey) {
      document.title = `${t(titleKey)} | Nícolas`
    }
  },
  { immediate: true },
)

const toggleLocale = () => {
  localeStore.toggle()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="w-full relative">
    <!-- Main navbar -->
    <div
      class="w-full flex items-center justify-between md:justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-32 px-4 sm:px-6 md:px-8 py-3 md:py-4"
    >
      <!-- Logo à esquerda -->
      <RouterLink to="/">
        <GradientButton>
          <div class="flex items-center gap-1.5 sm:gap-2">
            <img src="/logo.png" alt="logo" class="w-5 h-5 sm:w-6 sm:h-6" />
            <p class="font-bold text-sm sm:text-base block">Nícolas</p>
          </div>
        </GradientButton>
      </RouterLink>

      <!-- Links centrais - Escondidos em mobile -->
      <div class="hidden md:flex items-center gap-2 lg:gap-4">
        <RouterLink to="/">
          <Button
            :variant="$route.path === '/' ? 'secondary' : 'ghost'"
            class="text-xs lg:text-sm"
            >{{ t('nav.home') }}</Button
          >
        </RouterLink>
        <RouterLink to="/work">
          <Button
            :variant="$route.path === '/work' ? 'secondary' : 'ghost'"
            class="text-xs lg:text-sm"
            >{{ t('nav.work') }}</Button
          >
        </RouterLink>
        <RouterLink to="/projects">
          <Button
            :variant="$route.path === '/projects' ? 'secondary' : 'ghost'"
            class="text-xs lg:text-sm"
            >{{ t('nav.projects') }}</Button
          >
        </RouterLink>
        <RouterLink to="/portfolio">
          <Button
            :variant="$route.path === '/portfolio' ? 'secondary' : 'ghost'"
            class="text-xs lg:text-sm"
            >{{ t('nav.portfolio') }}</Button
          >
        </RouterLink>
      </div>

      <!-- Ações direita -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <Button
          variant="outline"
          size="icon"
          @click="theme.toggle()"
          :aria-pressed="theme.isDark"
          class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
        >
          <template v-if="theme.isDark">
            <Moon class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </template>
          <template v-else>
            <Sun class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </template>
        </Button>
        <Button
          variant="outline"
          size="icon"
          @click="toggleLocale()"
          :title="localeStore.locale"
          class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
        >
          <Languages class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Button>

        <!-- Menu button (mobile only) - Direita -->
        <Button
          variant="outline"
          size="icon"
          @click="toggleMobileMenu()"
          class="md:hidden h-8 w-8 sm:h-9 sm:w-9"
        >
          <Menu v-if="!mobileMenuOpen" class="h-4 w-4" />
          <X v-else class="h-4 w-4" />
        </Button>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 backdrop-blur-sm border-b border-border shadow-lg z-50"
      >
        <div class="flex flex-col gap-1 px-4 py-3">
          <RouterLink to="/" @click="closeMobileMenu()">
            <Button
              :variant="$route.path === '/' ? 'secondary' : 'ghost'"
              class="w-full justify-start text-sm"
              >{{ t('nav.home') }}</Button
            >
          </RouterLink>
          <RouterLink to="/work" @click="closeMobileMenu()">
            <Button
              :variant="$route.path === '/work' ? 'secondary' : 'ghost'"
              class="w-full justify-start text-sm"
              >{{ t('nav.work') }}</Button
            >
          </RouterLink>
          <RouterLink to="/projects" @click="closeMobileMenu()">
            <Button
              :variant="$route.path === '/projects' ? 'secondary' : 'ghost'"
              class="w-full justify-start text-sm"
              >{{ t('nav.projects') }}</Button
            >
          </RouterLink>
          <RouterLink to="/portfolio" @click="closeMobileMenu()">
            <Button
              :variant="$route.path === '/portfolio' ? 'secondary' : 'ghost'"
              class="w-full justify-start text-sm"
              >{{ t('nav.portfolio') }}</Button
            >
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped></style>
