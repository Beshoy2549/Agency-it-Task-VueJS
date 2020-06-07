<template>
  <div class="hello">
    <b-container>
      <b-row class="justify-content-md-center" col="10">
        <b-col style="margin-top:10vh" cols="6">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h6 class="alert alert-danger mt-4" v-if="con">
              Invalid User Or Password
            </h6>
            <b-form-group id="input-group-1" label=" Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="User Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Job:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.job"
                type="password"
                required
                placeholder="Enter Job"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" class="mr-4" variant="primary"
              >Submit</b-button
            >
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        job: ""
      },
      show: true,
      con: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("https://reqres.in/api/users", this.form)
        .then(() => {})
        .catch(error => {
          console.log(error.response);
          this.con = true;
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.job = "";
      this.con = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
