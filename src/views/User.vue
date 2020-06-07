<template>
  <div class="container">
    <h3>Users</h3>
    <router-link to="/creatuser" class="btn btn-primary mb-4"
      >Create</router-link
    >

    <table id="usersTable" class="table table-striped">
      <tr>
        <th>#</th>
        <th>Avatar</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      <tr v-for="user in users.data" :key="user.id">
        <td>{{ user.id }}</td>
        <td>
          <img
            :src="user.avatar"
            alt="User Avatar"
            class="rounded img-fluid avatar"
          />
        </td>
        <td>{{ user.first_name }} {{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="'/user/' + user.id" class="btn btn-primary mr-2"
            >View</router-link
          >
          <button class="btn btn-danger" @click="deleteUser(user)">
            Delete
          </button>
        </td>
      </tr>
    </table>

    <div class="my-4">
      <!-- Pagination -->
      <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item" :class="page === 1 ? 'disabled' : ''">
          <a class="page-link" @click="prevPage">
            Previous
          </a>
        </li>
        <li class="page-link" style="background-color: inherit">
          {{ page }} of {{ totalPages }}
        </li>
        <li class="page-item" :class="page === totalPages ? 'disabled' : ''">
          <a class="page-link" @click="nextPage">
            Next
          </a>
        </li>
      </ul>
    </div>
    <!-- <b-table striped hover :items="users.data"></b-table> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getUsers();
  },

  data() {
    return {
      baseUrl: "https://reqres.in/api/",
      users: [],
      page: 1,
      totalPages: 1
    };
  },
  methods: {
    getUsers() {
      this.$store
        .dispatch("USERS", this.page)
        .then(response => {
          this.users = response.data;
          this.totalPages = response.data.total_pages;
        })
        .catch(error => {
          console.log(error.response);
          alert("error");
        });
    },
    deleteUser(user) {
      axios
        .delete(this.baseUrl + "users/" + user.id)
        .then(() => {
          let index = this.users.data.indexOf(user);
          this.users.data.splice(index, 1);
        })
        .catch(error => {
          console.log(error.response);
          alert("error");
        });
    },
    prevPage() {
      this.page--;
      this.getUsers();
    },
    nextPage() {
      this.page++;
      this.getUsers();
    }
  }
};
</script>
<style scoped>
.avatar {
  max-width: 50px;
}
a:hover {
  cursor: pointer;
}
</style>
