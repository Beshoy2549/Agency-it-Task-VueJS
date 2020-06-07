<template>
  <div>
    <div class="card text-center">
      <div class="card-header">
        ID: <b>{{ singleResoure.id }}</b>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          Name: <b>{{ singleResoure.name }}</b>
        </h5>
        <p class="card-title">
          Color: <b>{{ singleResoure.color }}</b>
        </p>

        <p class="card-title">
          year: <b>{{ singleResoure.year }}</b>
        </p>

        <p class="card-title">
          Company: <b>{{ singleResoureCompany.company }}</b>
        </p>
        <p class="card-text">
          {{ singleResoureCompany.text }}
        </p>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getSingleResoure();
  },
  data() {
    return {
      baseUrl: "https://reqres.in/api/",
      singleResoures: this.$route.params.id,
      singleResoure: [],
      singleResoureCompany: {}
    };
  },
  methods: {
    getSingleResoure() {
      axios
        .get(this.baseUrl + "unknown/" + this.singleResoures)
        .then(response => {
          this.singleResoure = response.data.data;
          this.singleResoureCompany = response.data.ad;
        })
        .catch(error => {
          console.log(error.response);
          alert("error");
        });
    }
  }
};
</script>

<style></style>
