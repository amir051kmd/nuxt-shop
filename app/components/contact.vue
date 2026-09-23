<script setup>
const contactItems = [
  {
    title: 'Email',
    value: 'amir@example.com',
    href: 'mailto:amir@example.com'
  },
  {
    title: 'GitHub',
    value: 'github.com/amir',
    href: 'https://github.com/amir'
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/amir',
    href: '#'
  }
]
</script>

<template>

  <section
    id="contact"
    
    class="min-h-screen bg-white px-6 py-32
           text-black
           dark:bg-black dark:text-white"
  >

    <div
      class="mx-auto grid max-w-5xl
             items-center gap-16
             md:grid-cols-2"
    >

      <!-- متن -->
      <div>



        

        <p
          class="mb-4 text-xs font-medium uppercase
                 tracking-[0.3em]
                 text-black/40
                 dark:text-white/40"
        >
          Contact
        </p>

        <h2
          class="text-5xl font-black leading-tight
                 md:text-7xl"
        >
          با من
          <br>
          در ارتباط باش
        </h2>

        <p
          class="mt-8 max-w-lg text-lg leading-9
                 text-black/60
                 dark:text-white/60"
        >
          اگر برای پروژه‌ای به یک Front-end Developer
          نیاز دارید، خوشحال می‌شوم با شما همکاری کنم.
        </p>

      </div>


      <!-- اطلاعات تماس -->
      <div class="space-y-4">

        <a
          v-for="item in contactItems"
          :key="item.title"
          :href="item.href"
          target="_blank"
          class="group flex items-center
                 justify-between
                 rounded-2xl
                 border border-black/10
                 bg-white
                 p-6
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:border-black
                 dark:border-white/10
                 dark:bg-black
                 dark:hover:border-white"
        >

          <div>

            <p
              class="mb-2 text-xs uppercase
                     tracking-widest
                     text-black/40
                     dark:text-white/40"
            >
              {{ item.title }}
            </p>

            <p class="text-base font-medium">
              {{ item.value }}
            </p>

          </div>

          <span
            class="text-xl transition-transform
                   duration-300
                   group-hover:-translate-x-2"
          >
            ←
          </span>

        </a>


        <!-- دکمه ایمیل -->
        <a
          href="mailto:amir@example.com"
          class="mt-8 block rounded-2xl
                 bg-black px-6 py-5
                 text-center text-sm font-medium
                 text-white
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:bg-black/80
                 dark:bg-white
                 dark:text-black
                 dark:hover:bg-white/80"
        >
          ارسال ایمیل →
        </a>

      </div>

    </div>

  </section>

</template>