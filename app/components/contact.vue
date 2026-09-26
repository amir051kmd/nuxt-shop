<script setup>
const contactItems = [
  {
    title: "Email",
    value: "amir@example.com",
    href: "mailto:amir@example.com",
  },
  {
    title: "GitHub",
    value: "github.com/amir",
    href: "https://github.com/amir",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/amir",
    href: "#",
  },
];
</script>

<template>
  <section
    id="contact"
    dir="rtl"
    class="border-t border-black/[0.08]
    bg-[#f7f7f5]
    px-6 py-24
    text-black
    transition-colors duration-500
    dark:border-white/[0.08]
    dark:bg-[#0a0a0a]
    dark:text-white
    md:py-32"
  >

    <div
      class="mx-auto max-w-6xl"
    >

      <!-- Header -->
      <div
        class="mb-16 flex items-end justify-between
        border-b border-black/10 pb-8
        dark:border-white/10"
      >

        <div>

          <p
            class="mb-4 text-[10px]
            font-medium uppercase
            tracking-[0.25em]
            text-black/35
            dark:text-white/35"
          >
            Get in touch
          </p>

          <h2
            class="text-3xl font-semibold
            tracking-tight
            md:text-3xl"
          >
            ارتباط با من
          </h2>

        </div>


        <span
          class="hidden text-xs
          text-black/30
          dark:text-white/30
          md:block"
        >
          03 / Contact
        </span>

      </div>


      <!-- Content -->

      <div
        class="grid gap-16
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-24"
      >

        <!-- Text -->

        <div>

          <p
            class="max-w-md
            text-sm leading-8
            text-black/50
            dark:text-white/50"
          >
            برای همکاری روی پروژه‌های وب، توسعه رابط کاربری
            یا فرصت‌های شغلی، می‌توانید از طریق راه‌های ارتباطی
            زیر با من در تماس باشید.
          </p>


          <div
            class="mt-10
            h-px w-16
            bg-black/20
            dark:bg-white/20"
          ></div>


          <p
            class="mt-5 text-xs
            leading-6
            text-black/35
            dark:text-white/35"
          >
            معمولاً در کوتاه‌ترین زمان ممکن پاسخ خواهم داد.
          </p>

        </div>


        <!-- Contact Links -->

        <div>

          <div
            class="divide-y
            divide-black/10
            border-y
            border-black/10
            dark:divide-white/10
            dark:border-white/10"
          >

            <a
              v-for="item in contactItems"
              :key="item.title"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center
              justify-between
              py-5
              transition-all duration-300
              hover:px-2"
            >

              <div
                class="flex items-center gap-6"
              >

                <span
                  class="w-16 text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                  dark:text-white/35"
                >
                  {{ item.title }}
                </span>

                <span
                  class="text-sm
                  font-medium
                  text-black/70
                  transition-colors duration-300
                  group-hover:text-black
                  dark:text-white/70
                  dark:group-hover:text-white"
                >
                  {{ item.value }}
                </span>

              </div>


              <span
                class="text-sm
                text-black/25
                transition-all duration-300
                group-hover:-translate-x-1
                group-hover:text-black
                dark:text-white/25
                dark:group-hover:text-white"
              >
                ↗
              </span>

            </a>

          </div>


          <!-- Email CTA -->

          <a
            href="mailto:amir@example.com"
            class="group mt-8
            flex items-center
            justify-between
            border-b border-black
            pb-3
            transition-all duration-300
            dark:border-white"
          >

            <span
              class="text-xs
              font-medium
              uppercase
              tracking-[0.15em]"
            >
              ارسال ایمیل
            </span>

            <span
              class="text-lg
              transition-transform duration-300
              group-hover:-translate-x-1"
            >
              →
            </span>

          </a>

        </div>

      </div>

    </div>

  </section>
</template>