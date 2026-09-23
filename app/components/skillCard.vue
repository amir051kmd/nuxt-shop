<script setup>
const { data: profile } = await useFetch("/api/profile");

import { Icon } from '@iconify/vue'

</script>

<template>
<section class="mx-auto max-w-5xl px-6 py-32">


  <div class="mb-12">
    <p
      class="mb-3 text-xs font-medium uppercase tracking-[0.3em]
             text-black/40 dark:text-white/40"
    >
    Skills
    </p>
  </div>

  <!-- Skills -->
  <div class="flex flex-wrap justify-center gap-4">

    <div
      v-for="skill in profile.skills"
      :key="skill.name"
      class="group flex h-24 w-24
             items-center justify-center
             rounded-2xl
             border border-black/10
             bg-white
             text-black
             shadow-sm
             transition-all duration-300
             hover:-translate-y-2
             hover:scale-105
             hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
             dark:border-white/10
             dark:bg-black
             dark:text-white
             dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)]"
    >

      <Icon
        :icon="skill.icon"
        class="text-5xl transition-transform
               duration-300
               group-hover:scale-110"
      />

    </div>

  </div>
</section>

</template>

 




