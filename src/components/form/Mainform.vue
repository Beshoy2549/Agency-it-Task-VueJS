<template>
  <div>
    <b-row class="justify-content-md-center" col="10">
      <b-col cols="6">
        <b-nav tabs align="center">
          <b-nav-item :to="{ name: 'Login' }" exact exact-active-class="active"
            >Login</b-nav-item
          >
          <b-nav-item :to="{ name: 'Signup' }">SginUp</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Mainform"
};
</script>
