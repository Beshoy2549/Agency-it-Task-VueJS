<template>
  <div class="home">
    <Mainform />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Mainform from "@/components/form/Mainform.vue";

export default {
  name: "Home",
  components: {
    Mainform
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
</style>
