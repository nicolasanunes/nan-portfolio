<script setup lang="ts">
import { Phone, Mail, Linkedin, Github, Globe, Download } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const downloadCV = () => {
  window.open(
    'https://drive.google.com/drive/folders/1KgebkPIRfCFGaPe31g6XansKx6h7Wmiw?usp=sharing',
    '_blank',
  )
}
</script>

<template>
  <div class="min-h-screen py-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header with title and button -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-8 gap-4">
        <h1 class="text-4xl font-orbitron font-bold">{{ t('cv.title') }}</h1>
        <Button
          @click="downloadCV"
          class="flex items-center gap-2 font-orbitron self-end sm:self-auto"
        >
          <Download class="w-4 h-4" />
          {{ t('cv.downloadPdf') }}
        </Button>
      </div>

      <div
        class="border bg-card rounded-xl shadow-[0_0_20px_0_hsl(var(--primary)/0.2)] hover:shadow-[0_0_30px_0_hsl(var(--primary)/0.3)] transition-shadow duration-300 overflow-hidden"
      >
        <div class="grid md:grid-cols-3 gap-0">
          <!-- Coluna Esquerda - 33% -->
          <div class="md:col-span-1 bg-primary/10 dark:bg-primary/5 p-6 md:p-8">
            <!-- Contato -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-primary mb-4 font-orbitron">
                {{ t('cv.contact.title') }}
              </h2>
              <div class="space-y-3 text-sm">
                <div class="flex items-start gap-2">
                  <Globe class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">
                    {{ t('cv.contact.location') }}
                  </span>
                </div>
                <div class="flex items-start gap-2">
                  <Phone class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                    href="https://wa.me/5534999514231?text=Olá,%20vim%20através%20do%20seu%20portfólio"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors"
                  >
                    {{ t('cv.contact.whatsapp') }}
                  </a>
                </div>
                <div class="flex items-start gap-2">
                  <Mail class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:nicolasanunes@gmail.com"
                    class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors break-all"
                  >
                    nicolasanunes@gmail.com
                  </a>
                </div>
                <div class="flex items-start gap-2">
                  <Linkedin class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/nicolasanunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors break-all"
                  >
                    linkedin.com/in/nicolasanunes
                  </a>
                </div>
                <div class="flex items-start gap-2">
                  <Github class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                    href="https://www.github.com/nicolasanunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors break-all"
                  >
                    github.com/nicolasanunes
                  </a>
                </div>
              </div>
            </section>

            <!-- Principais Competências -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-primary mb-4 font-orbitron">
                {{ t('cv.mainSkills.title') }}
              </h2>
              <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.mainSkills.vue') }}
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.mainSkills.node') }}
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.mainSkills.typescript') }}
                </li>
              </ul>
            </section>

            <!-- Linguagens -->
            <section>
              <h2 class="text-xl font-bold text-primary mb-4 font-orbitron">
                {{ t('cv.languages.title') }}
              </h2>
              <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.languages.spanish') }}
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.languages.english') }}
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {{ t('cv.languages.portuguese') }}
                </li>
              </ul>
            </section>
          </div>

          <!-- Coluna Direita - 67% -->
          <div class="md:col-span-2 p-6 md:p-8">
            <!-- Cabeçalho -->
            <header class="mb-8">
              <h1
                class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2 font-orbitron"
              >
                {{ t('cv.profile.name') }}
              </h1>
              <p class="text-lg md:text-xl text-primary font-semibold mb-2">
                {{ t('cv.profile.title') }}
              </p>
              <p class="text-sm text-neutral-600 dark:text-neutral-400">
                {{ t('cv.profile.location') }}
              </p>
            </header>

            <!-- Resumo -->
            <section class="mb-8">
              <h2
                class="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-orbitron border-b-2 border-primary pb-2"
              >
                {{ t('cv.summary.title') }}
              </h2>
              <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {{ t('cv.summary.text') }}
              </p>
            </section>

            <!-- Competências -->
            <section class="mb-8">
              <h2
                class="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-orbitron border-b-2 border-primary pb-2"
              >
                {{ t('cv.skills.title') }}
              </h2>
              <div class="grid gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.runtime')
                  }}</span>
                  Node.js
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.database')
                  }}</span>
                  MongoDB, MySQL, PostgreSQL
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.dvcs')
                  }}</span>
                  Git
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.apiIntegration')
                  }}</span>
                  REST, GraphQL
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.frameworks')
                  }}</span>
                  Bootstrap, Express.js, Jest, NestJS, TailwindCSS, Vuetify 3, Vue.js 3
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.languages')
                  }}</span>
                  CSS3, HTML5, JavaScript, SQL, TypeScript
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.orm')
                  }}</span>
                  TypeORM
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.methodologies')
                  }}</span>
                  Agile (Scrum)
                </div>
                <div>
                  <span class="font-semibold text-neutral-900 dark:text-white">{{
                    t('cv.skills.store')
                  }}</span>
                  Pinia, Redux
                </div>
              </div>
            </section>

            <!-- Experiências Profissionais -->
            <section class="mb-8">
              <h2
                class="text-2xl font-bold text-neutral-900 dark:text-white mb-4 font-orbitron border-b-2 border-primary pb-2"
              >
                {{ t('cv.experience.title') }}
              </h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-bold text-neutral-900 dark:text-white">
                    {{ t('cv.experience.brasilCloud.company') }}
                  </h3>
                  <p class="text-base font-semibold text-primary">
                    {{ t('cv.experience.brasilCloud.position') }}
                  </p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {{ t('cv.experience.brasilCloud.period') }}
                  </p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2 italic">
                    {{ t('cv.experience.brasilCloud.location') }}
                  </p>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {{ t('cv.experience.brasilCloud.description') }}
                  </p>
                </div>
              </div>
            </section>

            <!-- Formação Acadêmica -->
            <section>
              <h2
                class="text-2xl font-bold text-neutral-900 dark:text-white mb-4 font-orbitron border-b-2 border-primary pb-2"
              >
                {{ t('cv.education.title') }}
              </h2>
              <div class="space-y-5">
                <div>
                  <h3 class="text-base font-bold text-neutral-900 dark:text-white">
                    {{ t('cv.education.iftm.institution') }}
                  </h3>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">
                    {{ t('cv.education.iftm.degree1') }}
                  </p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {{ t('cv.education.iftm.period1') }}
                  </p>
                </div>
                <div>
                  <h3 class="text-base font-bold text-neutral-900 dark:text-white">
                    {{ t('cv.education.iftm.institution') }}
                  </h3>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">
                    {{ t('cv.education.iftm.degree2') }}
                  </p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {{ t('cv.education.iftm.period2') }}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
