<script setup>
const { data: profile } = await useFetch("/api/profile");
</script>
<template>
  <!-- Projects -->
  <section class="mx-auto max-w-5xl px-6 py-14">
    <div class="mb-8">
      <p
        class="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-black/40 dark:text-white/40"
      >
        Projects
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-5">
      <div
        v-for="project in profile.projects"
        :key="project.id"
        class="flex w-full max-w-sm flex-col transition-all duration-300 hover:-translate-y-2 hover:scale-100"
      >
        <div
          class="flex min-h-[156px] w-full flex-col rounded-4xl border bg-neutral-primary-soft shadow-xs"
        >
          <div
            class="flex flex-1 flex-col  items-center justify-center gap-4 p-6 text-center"
          >
            <!-- نام پروژه -->
            <span
              class="dark:text-white inline-flex border-blue-400 items-center rounded-sm border border-brand-subtle  bg-brand-softer px-1.5 py-0.5 text-sm font-medium text-fg-brand-strong"
            >
              {{ project.name }}
            </span>

            <!-- تکنولوژی -->
            <div class="flex items-center">
              <span class="text-black dark:text-white">
                This app made with
              </span>

              <span class="pl-2 text-lg text-blue-400">
                {{ project.tech }}
              </span>

              <svg
                class="ms-1.5 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>

 
            </div>
            <a
  href="#"
  class=" inline-flex items-center gap-2 rounded-lg
         border border-black/20
         px-4 py-2
         text-sm font-medium
         text-black
         transition
         hover:bg-blue-500
         hover:text-white
         dark:border-white/20
         dark:text-white
         dark:hover:bg-blue-500"
>
  سفارش
  <span>→</span>
</a>         
          </div>

        </div>
    
      </div>
    </div>
  </section>
</template>
