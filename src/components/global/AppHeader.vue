<template>
  <div class="app-header">
    <b-navbar toggleable="lg" type="dark" fixed="top" variant="info">
      <b-container>
        <b-navbar-brand></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/user" exact> Users</b-nav-item>
            <b-nav-item to="/resoures" exact> Resoures</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
<style lang="scss">
.app-header .navbar-dark .navbar-nav .nav-link {
  color: #fff;
}
.app-header .dropdown-menu {
  background-color: #000 !important;
}

.app-header .dropdown-item {
  color: #fff;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #f00;
    padding-left: 2rem;
  }
}
</style>
