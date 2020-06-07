<template>
  <div class="dashboard">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
export default {
  name: "Dashboard",
  components: {
    AppHeader
  }
};
</script>
