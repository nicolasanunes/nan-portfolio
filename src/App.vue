<script setup lang="ts">
import { FluidCursor } from './components/ui/fluid-cursor'
import { StarsBackground } from './components/ui/bg-stars'
import { Button } from './components/ui/button'

const buttonClick = () => {
  alert('Button clicked!')
}
</script>

<template class="">
  <StarsBackground starColor="#BDD9F2" class="absolute inset-0 z-0">
    <FluidCursor />
    <div class="w-screen h-screen flex items-center justify-center z-10 relative">
      <Button variant="outline" @click="buttonClick">Hover me!</Button>
    </div>
  </StarsBackground>
</template>

<style scoped></style>
