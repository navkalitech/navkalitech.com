<template>
  <div class="contents">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :throttle="0" />
  </div>
</template>

<script setup lang="ts">
import "@/assets/global.css";
</script>
