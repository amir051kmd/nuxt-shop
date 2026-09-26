<script setup>
import { ref, onMounted } from "vue";

const { profile } = await useProfile();

const showHero = ref(false);

onMounted(() => {
  setTimeout(() => {
    showHero.value = true;
  }, 120);
});


</script>

<template>

  <section
    class="relative min-h-screen overflow-hidden bg-[#f3f2ee] text-black transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white"
  >

    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0
      [background-image:linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)]
      [background-size:72px_72px]
      dark:[background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
    ></div>

    <!-- Main -->
    <div
      class="relative z-10 mx-auto flex min-h-screen max-w-[1450px] items-center px-6 py-28 sm:px-8 md:px-12 lg:px-16"
    >

      <div
        class="grid w-full items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24"
      >

        <!-- IMAGE -->
  

        <div
          class="order-1 flex justify-center
          transition-all duration-[1200ms] ease-out"
          :class="
            showHero
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          "
        >

          <div class="group relative w-full max-w-[560px]">

            <!-- image number -->

            <div
              class="mb-4 flex items-center justify-between
              text-[10px] uppercase tracking-[0.3em]
              text-black/35 dark:text-white/30"
            >
              <span>01</span>

              <span>Profile</span>
            </div>


            <!-- image frame -->

            <div
              class="relative overflow-hidden
              rounded-[1.8rem]
              border border-black/10
              bg-white p-2
              shadow-[0_25px_70px_rgba(0,0,0,0.10)]
              transition-all duration-700
              group-hover:-translate-y-2
              group-hover:shadow-[0_35px_90px_rgba(0,0,0,0.15)]
              dark:border-white/10
              dark:bg-[#111]
              dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
            >

              <div
                class="relative overflow-hidden rounded-[1.35rem]"
              >

                <img
                  src="/images/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"
                  alt="Profile"
                class="aspect-[4/5] w-full object-cover
transition-transform duration-700
group-hover:scale-[1.025]"
                />

                <!-- bottom overlay -->

                <div
                  class="absolute inset-x-0 bottom-0 h-44
                  bg-gradient-to-t from-black/70
                  via-black/10 to-transparent"
                ></div>


                <!-- Image text -->

                <div
                  class="absolute bottom-7 left-7 text-white"
                >

                  <p
                    class="text-[10px] tracking-[0.25em]
                    text-white/60"
                  >
                    FRONT-END DEVELOPER
                  </p>

                  <p
                    class="mt-2 text-lg font-medium tracking-tight"
                  >
                    Vue · Nuxt · TypeScript
                  </p>

                </div>

              </div>

            </div>


            <!-- floating availability -->

            <div
              class="absolute -bottom-5 -left-5
              flex items-center gap-3
              rounded-xl
              border border-black/10
              bg-[#f3f2ee]/95
              px-4 py-3
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-[#111]/95"
            >

              <span
                class="relative flex h-2.5 w-2.5"
              >
                <span
                  class="absolute inline-flex
                  h-full w-full
                  animate-ping rounded-full
                  bg-emerald-500 opacity-50"
                ></span>

                <span
                  class="relative inline-flex
                  h-2.5 w-2.5 rounded-full
                  bg-emerald-500"
                ></span>
              </span>

              <span
                class="text-xs font-medium
                text-black/60 dark:text-white/60"
              >
                Available for work
              </span>

            </div>

          </div>

        </div>


        <!-- ========================= -->
        <!-- TEXT -->
        <!-- ========================= -->

        <div
          dir="rtl"
          class="order-2
          transition-all duration-[1200ms] ease-out"
          :class="
            showHero
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          "
        >

          <!-- small heading -->

          <div
            class="mb-8 flex items-center gap-4"
          >

            <span
              class="h-px w-12 bg-black/30 dark:bg-white/30"
            ></span>

            <span
              class="text-[11px] font-medium
              tracking-[0.2em]
              text-black/40
              dark:text-white/35"
            >
              PORTFOLIO · 2026
            </span>

          </div>


          <!-- greeting -->

          <p
            class="text-lg font-medium
            text-black/40 dark:text-white/40"
          >
            سلام، من
          </p>


          <!-- name -->

          <h1
            class="mt-3
            text-6xl
            font-black
            leading-[0.82]
            tracking-[-0.07em]"
          >
        امیر هستم .  
        </h1>


          <!-- job -->

          <div
            class="mt-10 flex items-center gap-4"
          >

            <span
              class="h-2.5 w-2.5 rounded-full
              bg-black dark:bg-white"
            ></span>

            <h2
              class="text-xl font-bold
              tracking-tight
              text-black/80
              dark:text-white/80
              md:text-2xl"
            >
              {{ profile.job }}
            </h2>

          </div>


          <!-- description -->

          <p
            class="mt-7 max-w-xl
            text-base leading-8
            text-black/55
            dark:text-white/50
            md:text-lg"
          >
            من یک توسعه‌دهنده
            <span
              class="font-semibold
              text-black dark:text-white"
            >
              Front-end
            </span>
            هستم و با
            <span
              class="font-semibold
              text-black dark:text-white"
            >
              Vue
            </span>
            و
            <span
              class="font-semibold
              text-black dark:text-white"
            >
              Nuxt
            </span>
            رابط‌های کاربری مدرن، سریع و کاربردی طراحی و توسعه می‌دهم.
          </p>


          <!-- technologies -->

          <div
            class="mt-8 flex flex-wrap
            items-center gap-x-5 gap-y-3"
          >

            <span
              v-for="tech in [
                'Vue.js',
                'Nuxt.js',
                'TypeScript',
                'Tailwind CSS'
              ]"
              :key="tech"
              class="text-xs font-medium
              text-black/40
              dark:text-white/35"
            >
              # {{ tech }}
            </span>

          </div>


          <!-- Buttons -->

          <div
            class="mt-10 flex flex-wrap
            items-center gap-3"
          >

            <NuxtLink
              to="/projects"
              class="group flex items-center gap-3
              rounded-xl
              bg-black
              px-6 py-3.5
              text-sm font-medium text-white
              shadow-[0_12px_30px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              dark:bg-white
              dark:text-black
              dark:shadow-none"
            >

              مشاهده پروژه‌ها

              <span
                class="transition-transform duration-300
                group-hover:-translate-x-1"
              >
                ←
              </span>

            </NuxtLink>


            <NuxtLink
              to="/about"
              class="group flex items-center gap-2
              rounded-xl
              border border-black/10
              px-5 py-3.5
              text-sm font-medium
              text-black/60
              transition-all duration-300
              hover:-translate-y-1
              hover:border-black/30
              hover:text-black
              dark:border-white/10
              dark:text-white/60
              dark:hover:border-white/30
              dark:hover:text-white"
            >

              درباره من

              <span
                class="transition-transform duration-300
                group-hover:-translate-x-1"
              >
                →
              </span>

            </NuxtLink>

          </div>


          <!-- bottom metadata -->

          <div
            class="mt-16 flex flex-wrap
            items-center gap-6
            text-[11px]
            text-black/30
            dark:text-white/30"
          >

            <span>
              Based in Iran
            </span>

            <span
              class="h-1 w-1 rounded-full
              bg-black/20
              dark:bg-white/20"
            ></span>

            <span>
              Vue / Nuxt
            </span>

            <span
              class="h-1 w-1 rounded-full
              bg-black/20
              dark:bg-white/20"
            ></span>

            <span>
              Open to opportunities
            </span>

          </div>

        </div>

      </div>

    </div>


    <!-- Other Sections -->

    <SocialIcon />
    <SkillCard />
    <ProjectCard />
    <Contact />
    <Footer />

  </section>
</template>