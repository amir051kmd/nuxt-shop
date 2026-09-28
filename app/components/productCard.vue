<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const phoneNumber = "09XXXXXXXXX";

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("fa-IR").format(props.product.price);
});

const smsLink = computed(() => {
  const message = `سلام، برای محصول ${props.product.name} با تعداد ${props.product.beads} دانه استعلام موجودی و قیمت همکاری دارم.`;

  return `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
});
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7DFCC] bg-white shadow-[0_8px_30px_rgba(15,81,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-[0_18px_45px_rgba(15,81,50,0.14)]"
  >
    <!-- Image -->
    <div
      class="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F8F5ED] via-[#F2ECDD] to-[#E8DFC9]"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Image Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#0F5132]/15 via-transparent to-transparent"
      />

      <!-- Badge -->
      <div
        v-if="product.badge"
        class="absolute right-3 top-3 rounded-full border border-[#E8D48A] bg-[#FFF9E6] px-3 py-1 text-xs font-bold text-[#8A6A00] shadow-sm"
      >
        {{ product.badge }}
      </div>

      <!-- Stock -->
      <div
        class="absolute bottom-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold shadow-sm"
        :class="
          product.stock
            ? 'bg-[#E8F5ED] text-[#0F5132]'
            : 'bg-[#FBEAEA] text-[#A63D40]'
        "
      >
        {{ product.stock ? "● موجود" : "● ناموجود" }}
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <!-- Category -->
      <div class="mb-2 flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
        <span class="text-xs font-medium text-[#6B756E]">
          {{ product.category }}
        </span>
      </div>

      <!-- Name -->
      <h2
        class="mb-1 text-lg font-black tracking-tight text-[#17221B] transition-colors group-hover:text-[#0F5132]"
      >
        {{ product.name }}
      </h2>

      <!-- Material -->
      <p class="mb-4 text-xs text-[#6B756E]">
        {{ product.material }}
      </p>

      <!-- Specs -->
      <div
        class="mb-5 grid grid-cols-2 divide-x divide-x-reverse divide-[#E7DFCC] overflow-hidden rounded-2xl border border-[#EEE8D9] bg-[#FAF8F2]"
      >
        <div class="px-3 py-2.5 text-center">
          <p class="mb-0.5 text-[10px] text-[#8A918B]">تعداد دانه</p>
          <p class="text-sm font-bold text-[#17221B]">
            {{ product.beads }}
          </p>
        </div>

        <div class="px-3 py-2.5 text-center">
          <p class="mb-0.5 text-[10px] text-[#8A918B]">وضعیت</p>
          <p
            class="text-sm font-bold"
            :class="product.stock ? 'text-[#0F5132]' : 'text-[#A63D40]'"
          >
            {{ product.stock ? "موجود" : "ناموجود" }}
          </p>
        </div>
      </div>

      <!-- Price -->
      <div class="mb-4 mt-auto">
        <p class="mb-1 text-[11px] text-[#8A918B]">
          قیمت مصرفی / هر عدد
        </p>

        <div class="flex items-end gap-1">
          <span class="text-xl font-black text-[#0F5132]">
            {{ formattedPrice }}
          </span>

          <span class="pb-0.5 text-xs font-medium text-[#6B756E]">
            تومان
          </span>
        </div>
      </div>

      <!-- Action -->
      <a
        v-if="product.stock"
        :href="smsLink"
        class="flex items-center justify-center gap-2 rounded-2xl bg-[#0F5132] px-4 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(15,81,50,0.18)] transition-all duration-300 hover:bg-[#0B4027] hover:shadow-[0_8px_24px_rgba(15,81,50,0.25)] active:scale-[0.98]"
      >
        <span>استعلام و سفارش</span>

        <span
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A227] text-[#17221B]"
        >
          ←
        </span>
      </a>

      <div
        v-else
        class="flex items-center justify-center rounded-2xl border border-[#E7D0D0] bg-[#FCF4F4] px-4 py-3 text-sm font-bold text-[#A63D40]"
      >
        فعلاً موجود نیست
      </div>
    </div>
  </article>
</template>