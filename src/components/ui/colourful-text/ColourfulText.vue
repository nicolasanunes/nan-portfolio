<template>
  <motion.span
    v-for="(char, index) in props.text"
    :key="`${char}-${count}-${index}`"
    :initial="{
      y: 0,
      opacity: 0.2,
      color: props.startColor,
      scale: 1,
      filter: 'blur(5px)',
    }"
    :transition="{
      duration: props.duration,
      delay: index * 0.05,
    }"
    :animate="{
      y: [0, -3, 0],
      opacity: [1, 0.8, 1],
      scale: [1, 1.01, 1],
      filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
      color: currentColors[index % currentColors.length],
    }"
    :exit="{
      y: -3,
      opacity: 1,
      scale: 1,
      filter: 'blur(5px)',
      color: props.startColor,
    }"
  >
    {{ char }}
  </motion.span>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

interface Props {
  text: string
  colors?: string[]
  startColor?: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  startColor: 'rgb(255,255,255)',
  duration: 0.5,
  colors: () => [],
})

const theme = useThemeStore()

const defaultColors = computed(() => {
  if (theme.isDark) {
    return ['rgb(90, 107, 140)', 'rgb(242, 242, 242)', 'rgb(189, 217, 242)', 'rgb(242, 141, 82)']
  } else {
    return ['rgb(7, 21, 38)', 'rgb(90, 107, 140)', 'rgb(242, 242, 242)', 'rgb(242, 141, 82)']
  }
})

const currentColors = ref(props.colors.length > 0 ? props.colors : defaultColors.value)
const count = ref(0)
const lastHidden = ref(0)

let intervalId: ReturnType<typeof setInterval> | undefined = undefined
onMounted(() => {
  intervalId = setInterval(() => {
    const colorsToUse = props.colors.length > 0 ? props.colors : defaultColors.value
    const shuffled = [...colorsToUse].sort(() => 0.5 - Math.random())
    currentColors.value = shuffled

    if (document.visibilityState === 'visible') {
      if (Date.now() - lastHidden.value > 500) {
        count.value++
      }
    } else {
      lastHidden.value = Date.now()
    }
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped></style>
