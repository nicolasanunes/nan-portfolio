<script setup lang="ts">
import CardSpotlight from '../components/ui/card-spotlight/CardSpotlight.vue'
import Button from '../components/ui/button/Button.vue'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'
import BlurReveal from '../components/ui/blur-reveal/BlurReveal.vue'
import ColourfulText from '../components/ui/colourful-text/ColourfulText.vue'
import RadiantText from '../components/ui/radiant-text/RadiantText.vue'
import { Github, Linkedin, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center justify-center mx-auto my-auto gap-4">
    <CardSpotlight
      class="flex-col items-center justify-center whitespace-nowrap rounded-2xl shadow-[0_0_40px_0_hsl(var(--primary)/0.3)] px-8 pt-8 pb-10"
      :gradient-color="'#F28D52'"
    >
      <div class="flex items-center justify-center mb-4">
        <Avatar class="h-32 w-32">
          <AvatarImage
            class="h-full w-full rounded-[inherit] object-cover"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile-image"
          />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex-1 items-center justify-center font-orbitron text-center mb-6">
        <BlurReveal :delay="0.2" :duration="0.75" class="">
          <div class="pb-2">
            <RadiantText
              class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
              :duration="5"
            >
              <p class="font-bold text-primary">Olá, me chamo Nícolas</p>
            </RadiantText>
          </div>
          <div class="text-xl pb-2">
            <ColourfulText text="DESENVOLVEDOR FULLSTACK" />
          </div>
          <div>
            <span class="text-sm text-neutral-600"
              >Desenvolvendo soluções bonitas <br />
              e performáticas</span
            >
          </div>
        </BlurReveal>
      </div>
      <div class="flex items-center justify-center gap-4">
        <Button class="rounded-md">Curriculum Vitae</Button>
        <Button class="rounded-md" variant="outline">Projetos</Button>
      </div>
      <div class="flex items-center justify-center gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/nicolasanunes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <Linkedin class="h-4 w-4" />
          </Button>
        </a>
        <a href="https://github.com/nicolasanunes" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Github class="h-4 w-4" />
          </Button>
        </a>
        <a
          href="https://wa.me/5534999514231?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <MessageCircle class="h-4 w-4" />
          </Button>
        </a>
      </div>
    </CardSpotlight>
  </div>
</template>

<style scoped></style>
