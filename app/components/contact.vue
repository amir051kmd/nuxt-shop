```vue
<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    id="contact"
    dir="rtl"
    class="px-4 py-8 text-black transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:py-10"
  >
    <div
      class="mx-auto max-w-6xl rounded-2xl border border-black/30 bg-white p-4 transition-colors duration-500 dark:border-white/10 dark:bg-[#111111] sm:p-6"
    >
      <!-- Header -->
      <div
        class="mb-10 flex flex-col gap-5 border-b border-black/10 pb-6 dark:border-white/10 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-8"
      >
        <div>
          <h2
            class="text-2xl font-semibold tracking-tight sm:text-3xl md:text-2xl"
          >
            ارتباط با من
          </h2>

          <p class="mt-2 text-sm text-gray-500 dark:text-white/50">
            از این راه ها در ارتباط باشیم.
          </p>
        </div>

        <p
          class="text-xs font-medium uppercase tracking-[0.3em] text-black/40 dark:text-white/40"
        >
          Communication
        </p>
      </div>

      <!-- اطلاعات تماس -->
      <div
        class="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2 md:gap-12"
      >
        <!-- Instagram -->
        <div class="flex gap-4 sm:gap-5">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition-colors dark:bg-white/10 sm:h-16 sm:w-16 sm:text-2xl"
          >
            <Icon
              icon="simple-icons:instagram"
              class="text-red-500"
            />
          </div>

          <div>
            <h3 class="text-xl font-bold sm:text-2xl">
              اینستاگرام
            </h3>

            <p class="mt-1 text-sm text-gray-500 dark:text-white/50 sm:mt-2">
              amir051kmd
            </p>
          </div>
        </div>

        <!-- تماس -->
        <div class="flex gap-4 sm:gap-5">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition-colors dark:bg-white/10 sm:h-16 sm:w-16 sm:text-2xl"
          >
            <Icon
              icon="lucide:phone"
              class="text-black dark:text-white"
            />
          </div>

          <div>
            <h3 class="text-xl font-bold sm:text-2xl">
              تماس
            </h3>

            <p class="mt-1 text-sm text-gray-500 dark:text-white/50 sm:mt-2">
              در روزهای کاری ساعت ۹ الی ۱۷
            </p>
          </div>
        </div>

        <!-- ایمیل -->
        <div class="flex gap-4 sm:gap-5">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition-colors dark:bg-white/10 sm:h-16 sm:w-16 sm:text-2xl"
          >
            <Icon
              icon="mdi:email-outline"
              class="text-green-500"
            />
          </div>

          <div class="min-w-0">
            <h3 class="text-xl font-bold sm:text-2xl">
              ایمیل
            </h3>

            <p
              class="mt-1 break-all text-sm text-gray-500 dark:text-white/50 sm:mt-2"
            >
              info@example.com
            </p>
          </div>
        </div>

        <!-- پشتیبانی -->
        <div class="flex gap-4 sm:gap-5">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition-colors dark:bg-white/10 sm:h-16 sm:w-16 sm:text-2xl"
          >
            <Icon
              icon="lucide:headset"
              class="text-blue-700 dark:text-blue-400"
            />
          </div>

          <div>
            <h3 class="text-xl font-bold sm:text-2xl">
              پشتیبانی
            </h3>

            <p
              class="mt-1 text-sm leading-7 text-gray-500 dark:text-white/50 sm:mt-2"
            >
              برای دریافت راهنمایی با من تماس بگیرید
            </p>
          </div>
        </div>

        <!-- آدرس -->
        <div class="flex gap-4 sm:gap-5 md:col-span-2">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition-colors dark:bg-white/10 sm:h-16 sm:w-16 sm:text-2xl"
          >
            📍
          </div>

          <div class="min-w-0 flex-1">
            <h3 class="text-xl font-bold sm:text-2xl">
              آدرس
            </h3>

            <p
              class="mt-1 max-w-2xl text-sm leading-7 text-gray-500 dark:text-white/50 sm:mt-2 sm:leading-8"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestias hic quas quidem blanditiis doloribus.
            </p>

            <button
              class="mt-4 cursor-pointer rounded-lg border border-gray-700 px-6 py-2 text-sm text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 dark:border-white/20 dark:text-white/60 sm:px-7"
            >
              کپی
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### نکته مهم درباره Responsive

اینجا:

```html
grid-cols-1 md:grid-cols-2
```

یعنی:

```text
📱 موبایل
┌──────────────┐
│ اینستاگرام   │
│ تماس         │
│ ایمیل        │
│ پشتیبانی     │
│ آدرس         │
└──────────────┘

💻 دسکتاپ
┌───────────┬───────────┐
│ اینستاگرام│ تماس      │
│ ایمیل     │ پشتیبانی  │
│ آدرس                 │
└──────────────────────┘
```

و برای Header:

```html
flex-col sm:flex-row
```

یعنی در موبایل:

```text
ارتباط با من
از این راه‌ها...

Communication
```

و در صفحه بزرگ‌تر دوباره کنار هم قرار می‌گیرند.

همچنین `break-all` برای ایمیل گذاشتم تا اگر ایمیل طولانی شد، **عرض صفحه موبایل را خراب نکند**.
