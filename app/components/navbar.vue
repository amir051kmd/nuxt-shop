<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'







const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Theme
const { darkMode, toggleTheme } = useTheme()

</script>

<template>
  <nav class="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">

    <!-- Navbar -->
    <div
      class="relative mx-auto flex max-w-5xl items-center justify-between
             rounded-2xl
             border border-black/10
             bg-white/90
             px-4 py-3
             shadow-2xl
             shadow-[0_20px_80px_rgba(0,0,0,0.15)]
             backdrop-blur-xl
             transition-all duration-300
             dark:border-white/10
             dark:bg-black/90
             dark:shadow-[0_20px_80px_rgba(255,255,255,0.08)]"
    >

      <!-- Logo -->
      <NuxtLink
        to="/"
        class="group flex items-center gap-2"
      >

        <img
          src="/images/images.jpg"
          alt="Amir"
          class="h-9 w-9 rounded-xl object-cover"
        />

        <div class="hidden sm:block">
          <p
            class="text-sm font-bold tracking-tight
                   text-black dark:text-white"
          >
            Amir
          </p>

         
        </div>

      </NuxtLink>


      <!-- Desktop Navigation -->
      <!-- دقیقاً وسط Navbar -->
      <div
        class="absolute left-1/2 top-1/2 hidden
               -translate-x-1/2 -translate-y-1/2
               items-center gap-1
               rounded-xl
               p-1
               md:flex"
      >

       


       
   <NuxtLink
          to="/contact"
          class="rounded-lg px-4 py-2 text-sm font-medium
                 text-black/50
                 transition-all duration-300
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          تماس
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="rounded-lg px-4 py-2 text-sm font-medium
                 text-black/50
                 transition-all duration-300
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          پروژه‌ها
        </NuxtLink>


     
         <NuxtLink
          to="/about"
          class="rounded-lg px-4 py-2 text-sm font-medium
                 text-black/50
                 transition-all duration-300
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          درباره من
        </NuxtLink>

 <NuxtLink
          to="/"
          class="rounded-lg px-4 py-2 text-sm font-medium
                 text-black/50
                 transition-all duration-300
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          خانه
        </NuxtLink>
      </div>


      <!-- Desktop Theme Button -->
      <button
        @click="toggleTheme"
        class="hidden
               h-10 w-10
               items-center justify-center
               rounded-xl
               bg-black
               text-white
               transition-all duration-300
               hover:scale-105
               hover:bg-black/80
               cursor-pointer
               dark:bg-white
               dark:text-black
               dark:hover:bg-white/80
               md:flex"
      >

        <Icon
          v-if="darkMode"
          icon="lucide:sun"
          class="text-xl"
        />

        <Icon
          v-else
          icon="lucide:moon"
          class="text-xl"
        />

      </button>


      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="flex h-10 w-10
               items-center justify-center
               rounded-xl
               border border-black/10
               bg-white
               text-black
               transition-all
               hover:bg-black/5
               cursor-pointer
               dark:border-white/10
               dark:bg-black
               dark:text-white
               dark:hover:bg-white/10
               md:hidden"
      >

        <!-- Hamburger -->
        <svg
          v-if="!menuOpen"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- Close -->
        <svg
          v-else
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

      </button>

    </div>


    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="mx-auto mt-2 max-w-5xl
             overflow-hidden
             rounded-2xl
             border border-black/10
             bg-white/95
             p-3
             shadow-[0_20px_60px_rgba(0,0,0,0.12)]
             backdrop-blur-xl
             dark:border-white/10
             dark:bg-black/95
             dark:shadow-[0_20px_60px_rgba(255,255,255,0.06)]
             md:hidden"
    >

      <div class="flex flex-col gap-1">

        <NuxtLink
          to="/"
          @click="menuOpen = false"
          class="rounded-xl px-4 py-3 text-sm font-medium
                 text-black/60
                 transition
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          خانه
        </NuxtLink>


        <NuxtLink
          to="/about"
          @click="menuOpen = false"
          class="rounded-xl px-4 py-3 text-sm font-medium
                 text-black/60
                 transition
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          درباره من
        </NuxtLink>


        <NuxtLink
          to="/projects"
          @click="menuOpen = false"
          class="rounded-xl px-4 py-3 text-sm font-medium
                 text-black/60
                 transition
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          پروژه‌ها
        </NuxtLink>


        <NuxtLink
          to="/contact"
          @click="menuOpen = false"
          class="rounded-xl px-4 py-3 text-sm font-medium
                 text-black/60
                 transition
                 hover:bg-black/5
                 hover:text-black
                 dark:text-white/60
                 dark:hover:bg-white/10
                 dark:hover:text-white"
        >
          تماس
        </NuxtLink>


        <!-- Mobile Theme -->
        <button
          @click="toggleTheme"
          class="mt-2 flex w-full
                 items-center justify-center
                 rounded-xl
                 border border-black/10
                 px-4 py-3
                 text-sm font-medium
                 text-black
                 transition
                 hover:bg-black hover:text-white
                 cursor-pointer
                 dark:border-white/10
                 dark:text-white
                 dark:hover:bg-white
                 dark:hover:text-black"
        >

          <Icon
            v-if="darkMode"
            icon="lucide:sun"
            class="text-xl"
          />

          <Icon
            v-else
            icon="lucide:moon"
            class="text-xl"
          />

        </button>

      </div>

    </div>

  </nav>
</template>