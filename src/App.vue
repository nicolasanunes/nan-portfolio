<script setup lang="ts">
import { FluidCursor } from './components/ui/fluid-cursor'
import { StarsBackground } from './components/ui/bg-stars'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'

const theme = useThemeStore()
const locale = useLocaleStore()

onMounted(() => {
  theme.init()
  locale.init()
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col text-foreground antialiased">
    <!-- Background layer -->
    <StarsBackground class="pointer-events-none absolute inset-0 -z-10" />

    <!-- Cursor FX overlay -->
    <FluidCursor />

    <!-- App layout -->
    <header class="w-full flex-none">
      <Navbar />
    </header>
    <main
      class="relative z-10 flex items-center justify-center flex-1 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
