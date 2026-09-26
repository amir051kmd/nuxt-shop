<script setup>
import SocialIcon from "./socialIcon.vue";
</script>
<template>
  <footer
    dir="rtl"
    class="border-black/10 text-black dark:border-white/10 dark:bg-black dark:text-white"
  >
    <!-- بخش اصلی -->
    <div class="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-4">
      <!-- معرفی -->
      <div class="md:col-span-2">
        <p
          class="mt-5 max-w-md text-sm leading-8 text-black/60 dark:text-white/60"
        >
          Front-end Developer هستم و با JavaScript، Vue و Nuxt رابط‌های کاربری
          مدرن و کاربردی طراحی می‌کنم.
        </p>

        <!-- وضعیت -->
        <div class="mt-8 flex items-center gap-3">
          <span class="h-2.5 w-2.5 rounded-full bg-green-500"></span>

          <span class="text-sm text-black/60 dark:text-white/60">
            آماده همکاری روی پروژه‌های جدید
          </span>
        </div>
      </div>

      <!-- لینک‌های سریع -->
      <div>
        <h3 class="mb-6 text-sm font-bold">دسترسی سریع</h3>

        <div class="flex flex-col gap-4">
          <NuxtLink
            to="/"
            class="text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            خانه
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            درباره من
          </NuxtLink>

          <NuxtLink
            to="/projects"
            class="text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            پروژه‌ها
          </NuxtLink>

          <a
            href="#contact"
            class="text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            تماس با من
          </a>
        </div>
      </div>

      <!-- تکنولوژی‌ها -->
      <div>
        <h3 class="mb-6 text-sm font-bold">تکنولوژی‌ها</h3>

        <div class="flex flex-wrap gap-2">
          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            HTML
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            CSS
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            JavaScript
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            TypeScript
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            Vue
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            Nuxt
          </span>

          <span
            class="rounded-lg border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            Git
          </span>
        </div>
      </div>
    </div>

    <!-- پایین Footer -->
    <div class="mx-auto mt-16 max-w-6xl px-6">
      <div
        class="flex flex-col items-center justify-between gap-5 border-t border-black/10 py-8 text-sm text-black/50 md:flex-row dark:border-white/10 dark:text-white/50"
      >
        <p dir="ltr">© 2026 Amir. All rights reserved.</p>

        <!-- شبکه‌های اجتماعی -->

        <SocialIcon />
        <div class="flex items-center gap-5">
          <a
            href="#"
            target="_blank"
            class="transition hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#"
            target="_blank"
            class="transition hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:amir@example.com"
            class="transition hover:text-black dark:hover:text-white"
          >
            Email
          </a>
        </div>

        <!-- برگشت به بالا -->
        <a
          href="#"
          class="transition hover:-translate-y-1 hover:text-black dark:hover:text-white"
        >
          بازگشت به بالا ↑
        </a>
      </div>
    </div>
  </footer>
</template>
