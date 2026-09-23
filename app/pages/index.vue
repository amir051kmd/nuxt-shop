<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Footer from "~/components/footer.vue";
const { profile } = await useProfile();
const showHero = ref(false);

let interval;

onMounted(() => {
  // ورود اولیه
  setTimeout(() => {
    showHero.value = true;
  }, 100);

  // هر 4.5 ثانیه انیمیشن دوباره اجرا می‌شود
  interval = setInterval(() => {
    showHero.value = false;

    // بعد از خارج شدن، دوباره وارد شود
    setTimeout(() => {
      showHero.value = true;
    }, 800);
  }, 6000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <section
    dir="ltr"
    class="min-h-screen w-full overflow-hidden bg-white dark:bg-black"
  >
    <div class="grid min-h-screen w-full md:grid-cols-2">
      <!-- تصویر -->
      <div
        class="order-1 flex items-center justify-center p-6 md:p-12 transition-all duration-2000 ease-out"
        :class="
          showHero ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
        "
      >
        <img
          src="/images/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"
          alt="Profile"
          class="h-[70vh] w-full max-w-2xl rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <!-- متن -->
      <div
        dir="rtl"
        class="order-2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 transition-all duration-2000 ease-out"
        :class="
          showHero ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
        "
      >
        <p class="text-lg font-medium text-black/50 dark:text-white/50">
          سلام، من
        </p>

        <h1
          class="mt-3 text-5xl font-black leading-tight text-black dark:text-white md:text-7xl"
        >
          امیر هستم
        </h1>

        <h2
          class="mt-5 text-2xl font-bold text-black dark:text-white md:text-4xl"
        >
          {{ profile.job }}
        </h2>

        <p
          class="mt-6 max-w-xl text-base leading-8 text-black/60 dark:text-white/60 md:text-lg"
        >
          من یک توسعه‌دهنده Front-end هستم که با Vue و Nuxt رابط‌های کاربری
          مدرن، سریع و کاربردی طراحی و توسعه می‌دهم.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/about"
            class="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            بیشتر درباره من
          </a>

          <a
            href="/projects"
            class="rounded-xl border border-black/15 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:border-black dark:border-white/20 dark:text-white dark:hover:border-white"
          >
            پروژه‌های من →
          </a>
        </div>
      </div>
    </div>
    <SocialIcon />
    <SkillCard />
    <ProjectCard />
    <Contact />
    <Footer />
  </section>
</template>
