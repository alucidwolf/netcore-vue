<template>
  <div class="container-fluid">
    <MainNavgation></MainNavgation>
     <!-- v-if="!$route.path.includes('/cmseditor')" -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavgation from "./Components/Navigation/MainNav";
export default {
  name: "app",
  components: {
    MainNavgation: MainNavgation
  }
};
</script>

<style lang="scss">
@import "./variables.scss";

#home {
  color: $vue-blue;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1240px;
  }
}
</style>
