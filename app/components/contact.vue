```vue
<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    id="contact"
    dir="rtl"
    class="px-6 py-10 text-black transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white md:py-10"
  >
    <div
      class="mx-auto max-w-6xl rounded-2xl border border-black/30 bg-white p-4 transition-colors duration-500 dark:border-white/10 dark:bg-[#111111]"
    >
      <!-- Header -->
      <div
        class="mb-16 flex items-end justify-between border-b border-black/10 pb-8 dark:border-white/10"
      >
        <div>
          <h2 class="text-3xl font-semibold tracking-tight md:text-2xl">
            ارتباط با من
          </h2>

          <p class="text-sm text-gray-500 dark:text-white/50">
            از این راه ها در ارتباط باشیم.
          </p>
        </div>

        <p
          class="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-black/40 dark:text-white/40"
        >
          Communication
        </p>
      </div>

      <!-- اطلاعات تماس -->
      <div class="mx-auto mt-20 grid max-w-6xl gap-12 md:grid-cols-2">

        <!-- Instagram -->
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-2xl transition-colors dark:bg-white/10"
          >
            <Icon
              icon="simple-icons:instagram"
              class="text-red-500"
            />
          </div>

          <div>
            <h3 class="text-2xl">اینستاگرام</h3>

            <p class="mt-2 text-gray-500 dark:text-white/50">
              amir051kmd
            </p>
          </div>
        </div>

        <!-- تماس -->
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-2xl transition-colors dark:bg-white/10"
          >
            <Icon
              icon="lucide:phone"
              class="text-black dark:text-white"
            />
          </div>

          <div>
            <h3 class="text-2xl font-bold">
              تماس
            </h3>

            <p class="mt-2 text-gray-500 dark:text-white/50">
              در روزهای کاری ساعت ۹ الی ۱۷
            </p>
          </div>
        </div>

        <!-- ایمیل -->
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-2xl transition-colors dark:bg-white/10"
          >
            <Icon
              icon="mdi:email-outline"
              class="text-green-500"
            />
          </div>

          <div>
            <h3 class="text-2xl font-bold">
              ایمیل
            </h3>

            <p class="mt-2 text-gray-500 dark:text-white/50">
              info@example.com
            </p>
          </div>
        </div>

        <!-- پشتیبانی -->
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-2xl transition-colors dark:bg-white/10"
          >
            <Icon
              icon="lucide:headset"
              class="text-blue-700 dark:text-blue-400"
            />
          </div>

          <div>
            <h3 class="text-2xl font-bold">
              پشتیبانی
            </h3>

            <p class="mt-2 text-gray-500 dark:text-white/50">
              برای دریافت راهنمایی با من تماس بگیرید
            </p>
          </div>
        </div>

        <!-- آدرس -->
        <div class="flex gap-5 md:col-span-2">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-2xl transition-colors dark:bg-white/10"
          >
            📍
          </div>

          <div>
            <h3 class="text-2xl font-bold">
              آدرس
            </h3>

            <p
              class="mt-2 max-w-2xl leading-8 text-gray-500 dark:text-white/50"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestias hic quas quidem blanditiis doloribus.
            </p>

            <button
              class="hover:border-blue-500 cursor-pointer mt-4 rounded-lg border border-gray-700 px-7 py-2 text-gray-500 transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:text-white/60"
            >
              کپی
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>