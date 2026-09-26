<script setup>
const { darkMode } = useTheme();
</script>

<template>
  <div :class="{ dark: darkMode }" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
