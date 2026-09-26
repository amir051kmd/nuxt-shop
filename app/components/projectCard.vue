<script setup>
const { data: profile } = await useFetch("/api/profile");
</script>

<template>
  <section
    dir="rtl"
    class="
      border-t border-black/[0.08]
      px-4 py-15
      text-black
      transition-colors duration-500
      dark:border-white/[0.08]
      dark:bg-[#0a0a0a]
      dark:text-white
      md:py-32
    "
  >
    <div class="mx-auto max-w-6xl">

      <!-- عنوان بخش -->
      <div
        class="
          mb-12
          flex items-end justify-between
          border-b border-black/10
          pb-6
          dark:border-white/10
        "
      >
        <div>

          <p
            class="
              mb-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-black/35
              dark:text-white/35
            "
          >
            Selected Projects
          </p>

          <h2
            class="
              text-3xl
              font-semibold
              tracking-tight
              md:text-2xl
            "
          >
            نمونه‌کارها
          </h2>

        </div>

        <span
          class="
            hidden
            text-xs
            text-black/30
            dark:text-white/30
            sm:block
          "
        >
          {{ profile?.projects?.length || 0 }} پروژه
        </span>
      </div>


      <!-- کارت‌های پروژه -->
      <div class="grid gap-9 md:grid-cols-2">

        <div
          v-for="(project, index) in profile?.projects"
          :key="project.id"
          class="relative"
        >

          <!-- کارت پشتی -->
          <div
            class="
              
              absolute
              inset-0
              -translate-y-4
              rounded-2xl
              border
              border-black/[0.06]
              bg-zinc-200

              dark:border-white/[0.06]
              dark:bg-zinc-800
             
            "
          ></div>


          <!-- کارت اصلی -->
          <article
            class="
              group
              relative
              z-10
              overflow-hidden
              rounded-2xl
              border
              border-black/10
              bg-white
              hover:border-blue-500

              transition-all
              duration-300
              hover:-translate-y-4
              hover:border-black/20
              dark:border-white/10
              dark:bg-[#111]
              dark:hover:border-blue-400
            "
          >

            <div class="p-6 sm:p-7">

              <!-- عنوان پروژه -->
              <div
                class="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                <h3
                  class="

                    font-semibold
                    tracking-tight
                    text-black
                    dark:text-white
                    text-sm
                  "
                >
                  {{ project.name }}
                </h3>


                <!-- آیکون -->
                <div
                  class="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    text-sm
                    text-black/50
                    transition-all
                    duration-300
                    group-hover:-rotate-45
                    group-hover:border-black
                    group-hover:text-black
                    dark:border-white/10
                    dark:text-white/40
                    dark:group-hover:border-white
                    dark:group-hover:text-white
                  "
                >
                  ↗
                </div>

              </div>


              <!-- تکنولوژی -->
              <div
                class="
                  mt-6
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  class="
                    text-xs
                    text-black/35
                    dark:text-white/35
                  "
                >
                  ساخته شده با
                </span>

                <span
                  class="
                    rounded-full
                    border
                    border-blue-500/15
                    bg-blue-500/[0.06]
                    px-3
                    py-1
                    text-[11px]
                    font-medium
                    text-blue-600
                    dark:border-blue-400/15
                    dark:bg-blue-400/[0.06]
                    dark:text-blue-400
                  "
                >
                  {{ project.tech }}
                </span>

              </div>


              <!-- خط جداکننده -->
              <div
                class="
                  my-7
                  h-px
                  bg-black/[0.07]
                  dark:bg-white/[0.07]
                "
              ></div>


              <!-- لینک پروژه -->
              <a
                href="#"
                class="
                  group/link
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-black/55
                  transition-colors
                  duration-300
                  hover:text-black
                  dark:text-white/50
                  dark:hover:text-white
                "
              >

                مشاهده پروژه

                <span
                  class="
                    transition-transform
                    duration-300
                    group-hover/link:-translate-x-1
                  "
                >
                  ←
                </span>

              </a>

            </div>

          </article>

        </div>

      </div>

    </div>
  </section>
</template>