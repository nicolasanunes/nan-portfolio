<script setup lang="ts">
import CardSpotlight from '../components/ui/card-spotlight/CardSpotlight.vue'
import Button from '../components/ui/button/Button.vue'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'
import BlurReveal from '../components/ui/blur-reveal/BlurReveal.vue'
import ColourfulText from '../components/ui/colourful-text/ColourfulText.vue'
import RadiantText from '../components/ui/radiant-text/RadiantText.vue'
import { Github, Linkedin, MessageCircle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-center mx-auto my-auto w-full">
    <CardSpotlight
      class="flex-col items-center justify-center rounded-xl md:rounded-2xl shadow-[0_0_20px_0_hsl(var(--primary)/0.2)] md:shadow-[0_0_40px_0_hsl(var(--primary)/0.3)] px-4 sm:px-6 md:px-8 pt-6 sm:pt-7 md:pt-8 pb-8 sm:pb-9 md:pb-10 w-full max-w-md"
      :gradient-color="'#F28D52'"
    >
      <div class="flex items-center justify-center mb-3 sm:mb-4">
        <Avatar class="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
          <AvatarImage
            class="h-full w-full rounded-[inherit] object-cover"
            src="src/assets/img/profile-picture.jpg"
            alt="profile-image"
          />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex-1 items-center justify-center font-orbitron text-center mb-5 sm:mb-6">
        <BlurReveal :delay="0.2" :duration="0.75" class="">
          <div class="pb-1.5 sm:pb-2">
            <RadiantText
              class="inline-flex items-center justify-center px-3 sm:px-4 py-0.5 sm:py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
              :duration="5"
            >
              <p class="font-bold text-primary text-sm sm:text-base">{{ t('home.greeting') }}</p>
            </RadiantText>
          </div>
          <div class="text-base sm:text-lg md:text-xl pb-1.5 sm:pb-2">
            <ColourfulText :text="t('home.title')" />
          </div>
          <div class="px-2 sm:px-0">
            <span class="text-xs sm:text-sm text-neutral-600">{{ t('home.subtitle') }}</span>
          </div>
        </BlurReveal>
      </div>
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto"
      >
        <RouterLink to="/work" class="w-full sm:w-auto">
          <Button class="rounded-md text-xs sm:text-sm w-full sm:w-auto">{{ t('home.cv') }}</Button>
        </RouterLink>
        <RouterLink to="/projects" class="w-full sm:w-auto">
          <Button class="rounded-md text-xs sm:text-sm w-full sm:w-auto" variant="outline">{{
            t('home.projects')
          }}</Button>
        </RouterLink>
      </div>
      <div class="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
        <a
          href="https://www.linkedin.com/in/nicolasanunes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" class="h-9 w-9 sm:h-10 sm:w-10">
            <Linkedin class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </a>
        <a href="https://github.com/nicolasanunes" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" class="h-9 w-9 sm:h-10 sm:w-10">
            <Github class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </a>
        <a
          href="https://wa.me/5534999514231?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" class="h-9 w-9 sm:h-10 sm:w-10">
            <MessageCircle class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </a>
      </div>
    </CardSpotlight>
  </div>
</template>

<style scoped></style>
