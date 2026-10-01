<script setup>
import { computed, ref } from "vue";
import productsData from "~~/data/products.json";

/* ================= CONTACT INFO ================= */

const phoneNumber = "09123456789";

const etaLink = "https://eitaa.com/amir051kmd";

const phoneLink = `tel:${phoneNumber}`;


/* ================= PRODUCTS ================= */

const products = productsData.products;

const search = ref("");

const selectedMaterial = ref("همه");

const materials = computed(() => {
  return [
    "همه",
    ...new Set(products.map((product) => product.material)),
  ];
});

/* ================= FILTER PRODUCTS ================= */

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesMaterial =
      selectedMaterial.value === "همه" ||
      product.material === selectedMaterial.value;

    const searchValue = search.value.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      product.name.toLowerCase().includes(searchValue) ||
      product.material.toLowerCase().includes(searchValue) ||
      product.color.toLowerCase().includes(searchValue);

    return matchesMaterial && matchesSearch;
  });
});


/* ================= AVAILABLE PRODUCTS ================= */

const availableProducts = computed(() => {
  return products.filter((product) => product.stock).length;
});


/* ================= ETA PRODUCT LINK ================= */

const getEtaLink = (product) => {
  const message = `سلام، برای سفارش تسبیح گلدار ${product.name} با رنگ ${product.color} و تعداد ${product.beads} دانه پیام می‌دهم.`;

  return `${etaLink}?text=${encodeURIComponent(message)}`;
};
</script>


<template>
  <main
    dir="rtl"
    class="min-h-screen bg-[#F8F5ED] text-[#17221B]"
  >

    <!-- ================= HEADER ================= -->

    <header
      class="sticky top-0 z-50 border-b border-[#E7DFCC]/80 bg-[#F8F5ED]/95 backdrop-blur-xl"
    >
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >

        <!-- Logo -->

        <a
          href="/"
          class="flex items-center gap-3"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F5132] text-xl text-[#E8D48A] shadow-lg"
          >
            ت
          </div>

          <div>
            <p class="text-sm font-black text-[#0F5132]">
              تسبیح سرا
            </p>

            <p class="text-[10px] text-[#8A918B]">
              عرضه مستقیم تسبیح‌های گلدار
            </p>
          </div>
        </a>


        <!-- Desktop Navigation -->

        <nav class="hidden items-center gap-7 md:flex">

          <a
            href="#products"
            class="text-sm font-bold text-[#17221B] transition-colors hover:text-[#0F5132]"
          >
            محصولات
          </a>

          <a
            href="#contact"
            class="text-sm font-bold text-[#17221B] transition-colors hover:text-[#0F5132]"
          >
            ارتباط با ما
          </a>

          <a
            href="#cooperation"
            class="text-sm font-bold text-[#17221B] transition-colors hover:text-[#0F5132]"
          >
            قیمت همکاری
          </a>

          <a
            :href="etaLink"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-xl bg-[#C9A227] px-5 py-2.5 text-sm font-black text-[#17221B] shadow-md transition-colors hover:bg-[#B28D1D] hover:shadow-lg"
          >
            سفارش در ایتا
          </a>

        </nav>


        <!-- Mobile Button -->

        <a
          :href="etaLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-xl bg-[#0F5132] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors active:scale-95 md:hidden"
        >
          <span>
            سفارش در ایتا
          </span>

          <span class="text-[#E8D48A]">
            ↗
          </span>
        </a>

      </div>
    </header>


    <!-- ================= HERO ================= -->

    <section class="relative overflow-hidden">

      <div
        class="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl"
      />

      <div
        class="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#0F5132]/10 blur-3xl"
      />


      <div
        class="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24"
      >

        <!-- Text -->

        <div>

          <div
            class="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#FFF9E6] px-4 py-2 text-xs font-bold text-[#8A6A00]"
          >
            <span class="h-2 w-2 rounded-full bg-[#C9A227]" />

            عرضه مستقیم تسبیح‌های گلدار به همکاران
          </div>


          <h1
            class="max-w-2xl text-4xl font-black leading-[1.25] tracking-tight text-[#0F5132] sm:text-5xl lg:text-6xl"
          >
            تسبیح‌های

            <span class="text-[#C9A227]">
              گلدار
            </span>

            برای ویترین شما.
          </h1>


          <p
            class="mt-5 max-w-xl text-sm leading-8 text-[#68736B] sm:text-base"
          >
            مجموعه‌ای از تسبیح‌های گلدار منتخب با تنوع رنگ،
            مشخصات شفاف و قیمت مشخص؛ مناسب فروشگاه‌ها،
            مغازه‌داران و همکاران.
          </p>

   <p
            class="mt-5 max-w-xl text-sm leading-8 text-[#68736B] sm:text-base"
          >
           با مدیریت : سرکار خانم کریمدادی
          </p>
          <!-- Trust pills -->

          <div class="mt-7 flex flex-wrap gap-2">

            <div
              class="rounded-xl border border-[#DDE5DE] bg-[#EDF7F0] px-3 py-2 text-xs font-bold text-[#0F5132]"
            >
              ✓ تنوع تسبیح گلدار
            </div>

            <div
              class="rounded-xl border border-[#E7DFCC] bg-white px-3 py-2 text-xs font-bold text-[#6B756E]"
            >
              ✓ قیمت مشخص
            </div>

            <div
              class="rounded-xl border border-[#E8D48A]/50 bg-[#FFF9E6] px-3 py-2 text-xs font-bold text-[#8A6A00]"
            >
              ✓ سفارش مستقیم در ایتا
            </div>

          </div>


          <!-- Hero Buttons -->

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#products"
              class="rounded-2xl bg-[#0F5132] px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_8px_25px_rgba(15,81,50,0.2)] transition-colors hover:bg-[#0B4027]"
            >
              مشاهده تسبیح‌ها
            </a>


            <a
              :href="etaLink"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-2xl border border-[#C9A227] bg-white px-7 py-3.5 text-center text-sm font-black text-[#8A6A00] transition-colors hover:bg-[#FFF9E6]"
            >
              ثبت سفارش در ایتا
            </a>

          </div>

        </div>


        <!-- Hero Visual -->

        <div class="relative hidden lg:block">

          <div
            class="relative mx-auto aspect-square max-w-[480px] overflow-hidden rounded-[3rem] border border-[#E7DFCC] bg-gradient-to-br from-[#E9E1D0] via-[#F8F5ED] to-[#DDE8DF] p-8 shadow-[0_30px_80px_rgba(15,81,50,0.12)]"
          >

            <div
              class="flex h-full items-center justify-center rounded-[2.5rem] border border-white/70 bg-white/40"
            >

              <div class="text-center">

                <div
                  class="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#C9A227]/30 bg-[#0F5132] text-5xl text-[#E8D48A] shadow-2xl"
                >
                  ت
                </div>

                <p class="text-2xl font-black text-[#0F5132]">
                  تسبیح سرا
                </p>

                <p class="mt-2 text-sm text-[#6B756E]">
                  تسبیح‌های گلدار برای ویترین شما
                </p>

              </div>

            </div>


            <!-- Available Products -->

            <div
              class="absolute right-4 top-8 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl"
            >

              <p class="text-[10px] text-[#8A918B]">
                محصولات موجود
              </p>

              <p class="mt-1 text-xl font-black text-[#0F5132]">
                {{ availableProducts }}
              </p>

            </div>


            <!-- Cooperation -->

            <div
              class="absolute bottom-8 left-4 rounded-2xl border border-[#E8D48A]/60 bg-[#FFF9E6] px-4 py-3 shadow-xl"
            >

              <p class="text-xs font-black text-[#8A6A00]">
                قیمت همکاری
              </p>

              <p class="mt-1 text-[10px] text-[#8A918B]">
                برای سفارش تعداد بالا
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ================= CATALOG ================= -->

    <section
      id="products"
      class="border-t border-[#E7DFCC] bg-white py-12 sm:py-16"
    >

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->

        <div
          class="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >

          <div>

            <div
              class="mb-2 flex items-center gap-2 text-xs font-black text-[#C9A227]"
            >
              <span class="h-px w-7 bg-[#C9A227]" />

              مجموعه تسبیح‌های گلدار
            </div>

            <h2
              class="text-3xl font-black text-[#0F5132] sm:text-4xl"
            >
              انتخاب تسبیح
            </h2>

            <p class="mt-2 text-sm text-[#6B756E]">
              تسبیح موردنظر خود را بر اساس نام، رنگ یا جنس پیدا کنید.
            </p>

          </div>


          <div
            class="rounded-2xl border border-[#DDE5DE] bg-[#EDF7F0] px-4 py-3 text-xs font-bold text-[#0F5132]"
          >
            {{ filteredProducts.length }} محصول نمایش داده می‌شود
          </div>

        </div>


        <!-- Search -->

        <div class="mb-5">

          <div class="relative">

            <input
              v-model="search"
              type="text"
              placeholder="جستجو بر اساس نام، رنگ یا جنس تسبیح گلدار..."
              class="w-full rounded-2xl border border-[#E2DDCF] bg-[#FAF8F2] px-5 py-4 text-sm text-[#17221B] outline-none transition-colors placeholder:text-[#9AA19B] focus:border-[#0F5132] focus:bg-white focus:ring-4 focus:ring-[#0F5132]/10"
            />

            <span
              class="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#8A918B]"
            >
              ⌕
            </span>

          </div>

        </div>


        <!-- Categories -->

        <div
          class="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        >

          <button
            v-for="material in materials"
    :key="material"
    @click="selectedMaterial = material"
    class="shrink-0 rounded-full px-5 py-2.5 text-xs font-black transition-colors"
    :class="
      selectedMaterial === material
        ? 'bg-[#0F5132] text-white shadow-lg shadow-[#0F5132]/15'
        : 'border border-[#E5DFD0] bg-[#FAF8F2] text-[#68736B] hover:border-[#C9A227] hover:text-[#8A6A00]'
    "
          >
            {{ material }}
          </button>

        </div>


        <!-- Products -->

        <div
          v-if="filteredProducts.length"
          class="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        >

          <ProductCard
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            :product="product"
            :eager="index < 4"
          />

        </div>


        <!-- Empty -->

        <div
          v-else
          class="rounded-3xl border border-[#E7DFCC] bg-[#FAF8F2] px-6 py-16 text-center"
        >

          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF7F0] text-2xl text-[#0F5132]"
          >
            ⌕
          </div>

          <h3 class="text-lg font-black text-[#17221B]">
            محصولی پیدا نشد
          </h3>

          <p class="mt-2 text-sm text-[#6B756E]">
            نام، رنگ یا جنس تسبیح دیگری را امتحان کنید.
          </p>

        </div>

      </div>

    </section>


    <!-- ================= CONTACT ================= -->

    <section
      id="contact"
      class="border-t border-[#E7DFCC] bg-[#F8F5ED] py-14 sm:py-20"
    >

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="mx-auto max-w-2xl text-center">

          <div
            class="mb-3 inline-flex rounded-full border border-[#C9A227]/40 bg-[#FFF9E6] px-4 py-2 text-xs font-bold text-[#8A6A00]"
          >
            ارتباط مستقیم
          </div>

          <h2
            class="text-2xl font-black text-[#0F5132] sm:text-3xl"
          >
            سفارش و ارتباط با ما
          </h2>

          <p class="mt-3 text-sm leading-7 text-[#6B756E]">
            برای ثبت سفارش، استعلام موجودی و دریافت قیمت همکاری
            می‌توانید مستقیماً از طریق ایتا یا تماس تلفنی با ما در ارتباط باشید.
          </p>

        </div>


        <div
          class="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2"
        >

          <!-- Eitaa -->

          <a
            :href="etaLink"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-3xl border border-[#DDE5DE] bg-white p-6 shadow-[0_8px_30px_rgba(15,81,50,0.06)] transition-colors duration-200 hover:border-[#0F5132]/30 hover:shadow-[0_18px_45px_rgba(15,81,50,0.12)]"
          >

            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5132] text-xl text-white"
            >
              ا
            </div>

            <p class="text-xs text-[#8A918B]">
              ثبت سفارش
            </p>

            <h3
              class="mt-1 text-lg font-black text-[#0F5132] group-hover:text-[#C9A227]"
            >
              ایتا
            </h3>

            <p class="mt-2 text-sm text-[#6B756E]">
              برای ثبت سفارش تسبیح گلدار و دریافت قیمت همکاری
            </p>

          </a>


          <!-- Phone -->

          <a
            :href="phoneLink"
            class="group rounded-3xl border border-[#DDE5DE] bg-white p-6 shadow-[0_8px_30px_rgba(15,81,50,0.06)] transition-colors duration-200 hover:border-[#C9A227]/40 hover:shadow-[0_18px_45px_rgba(15,81,50,0.12)]"
          >

            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227] text-xl text-[#17221B]"
            >
              ☎
            </div>

            <p class="text-xs text-[#8A918B]">
              تماس مستقیم
            </p>

            <h3
              class="mt-1 text-lg font-black text-[#8A6A00]"
            >
              تماس تلفنی
            </h3>

            <p
              class="mt-2 text-sm font-bold text-[#17221B]"
              dir="ltr"
            >
              {{ phoneNumber }}
            </p>

          </a>

        </div>

      </div>

    </section>


    <!-- ================= COOPERATION ================= -->

    <section
      id="cooperation"
      class="bg-[#0F5132] py-14 sm:py-20"
    >

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          class="relative overflow-hidden rounded-[2rem] border border-[#E8D48A]/30 bg-gradient-to-br from-[#145F3C] to-[#0B4027] px-6 py-10 sm:px-10 lg:px-14"
        >

          <div
            class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl"
          />


          <div
            class="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >

            <div>

              <div
                class="mb-3 inline-flex rounded-full bg-[#C9A227]/15 px-3 py-1.5 text-xs font-bold text-[#E8D48A]"
              >
                مخصوص همکاران
              </div>

              <h2
                class="text-2xl font-black text-white sm:text-3xl"
              >
                برای خرید تعداد بالا،

                <span class="text-[#E8D48A]">
                  قیمت همکاری
                </span>

                بگیرید.
              </h2>

              <p
                class="mt-3 max-w-2xl text-sm leading-7 text-white/70"
              >
                برای اطلاع از موجودی روز، قیمت همکاری و شرایط سفارش
                تسبیح‌های گلدار، مستقیماً در ایتا پیام ارسال کنید.
              </p>

            </div>


            <a
              :href="etaLink"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 rounded-2xl bg-[#C9A227] px-7 py-4 text-sm font-black text-[#17221B] shadow-xl transition-colors hover:bg-[#E0BE38]"
            >
              سفارش در ایتا
            </a>

          </div>

        </div>

      </div>

    </section>


    <!-- ================= FOOTER ================= -->

    <footer
      class="border-t border-[#E7DFCC] bg-[#F8F5ED]"
    >

      <div
        class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
      >

        <div>

          <p class="font-black text-[#0F5132]">
            تسبیح سرا
          </p>

          <p class="mt-1 text-xs text-[#8A918B]">
            عرضه مستقیم تسبیح‌های گلدار به همکاران
          </p>

        </div>


        <div class="flex items-center gap-4">

          <a
            :href="etaLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs font-bold text-[#0F5132] hover:text-[#C9A227]"
          >
            ایتا
          </a>

          <a
            :href="phoneLink"
            class="text-xs font-bold text-[#8A6A00]"
          >
            تماس
          </a>

        </div>


        <p class="text-xs text-[#8A918B]">
          © تمامی حقوق محفوظ است.
        </p>

      </div>

    </footer>

  </main>
</template>