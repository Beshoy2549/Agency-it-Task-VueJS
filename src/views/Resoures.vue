<template>
  <div>
    <h1>Resoures</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="resousre in resousres.data"
          :key="resousre.id"
        >
          <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">
              Name : <b>{{ resousre.name }} </b>
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Year : <b>{{ resousre.year }} </b>
              </h4>
              <p class="card-title">
                Name : <b>{{ resousre.pantone_value }} </b>
              </p>
              <h6 class="card-title">
                Color :
                <div
                  class="mt-3 color"
                  :style="{ 'background-color': resousre.color }"
                ></div>
              </h6>
              <router-link
                :to="'resoures/' + resousre.id"
                class="btn btn-primary"
                >View</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getResousres();
  },
  data() {
    return {
      resouseUrl: "https://reqres.in/api/unknown",
      resousres: []
    };
  },
  methods: {
    getResousres() {
      axios
        .get(this.resouseUrl)
        .then(response => {
          this.resousres = response.data;
          console.log(this.resousres);
        })
        .catch(error => {
          console.log(error.response);
          alert("error");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.color {
  height: 40px;
  width: 40px;
  margin: auto;
}
</style>
