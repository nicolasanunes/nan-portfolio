<script setup lang="ts">
import Button from './ui/button/Button.vue'
import { GradientButton } from './ui/gradient-button'
import { useThemeStore } from '@/stores/theme'
import { Moon, Sun } from 'lucide-vue-next'

// Satisfy vue/multi-word-component-names rule without changing file name
defineOptions({ name: 'AppNavbar' })

const theme = useThemeStore()
</script>

<template>
  <nav class="w-full flex items-center justify-center gap-32 py-4">
    <!-- Logo -->
    <RouterLink to="/">
      <GradientButton>
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="logo" class="w-6 h-6" />
          <p class="font-bold">Nícolas</p>
        </div>
      </GradientButton>
    </RouterLink>

    <!-- Links centrais -->
    <div class="flex items-center gap-4">
      <RouterLink to="/">
        <Button variant="secondary">Início</Button>
      </RouterLink>
      <RouterLink to="/work">
        <Button variant="ghost">Curriculum Vitae</Button>
      </RouterLink>
      <RouterLink to="/projects">
        <Button variant="ghost">Projetos</Button>
      </RouterLink>
      <RouterLink to="/portfolio">
        <Button variant="ghost">Portfólio</Button>
      </RouterLink>
    </div>

    <!-- Ação direita -->
    <Button variant="outline" size="icon" @click="theme.toggle()" :aria-pressed="theme.isDark">
      <template v-if="theme.isDark">
        <Moon class="h-4 w-4" />
      </template>
      <template v-else>
        <Sun class="h-4 w-4" />
      </template>
    </Button>
  </nav>
</template>

<style scoped></style>
