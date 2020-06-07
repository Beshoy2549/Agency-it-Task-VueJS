<template>
  <div>
    <div class="wrapper">
      <div class="left">
        <img :src="singleUser.avatar" alt="user" width="100" />
        <h4>{{ singleUser.first_name }} {{ singleUser.last_name }}</h4>
        <p>UI Developer</p>
      </div>
      <div class="right">
        <div class="info">
          <h3>Information</h3>
          <div class="info_data">
            <div class="data">
              <h4>Email</h4>
              <p>{{ singleUser.email }}</p>
            </div>
            <div class="data">
              <h4>Phone</h4>
              <p>01-213-9987</p>
            </div>
          </div>
        </div>

        <div class="projects">
          <h3>Job</h3>
          <div class="projects_data">
            <div class="data">
              <h4>{{ companyData.company }}</h4>
            </div>
            <div class="data">
              <h4>Most Viewed</h4>
              <p>dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div class="social_media">
          <ul>
            <li>
              <a href="#"><i class="fa fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getSingleUser();
  },
  data() {
    return {
      singleUserId: this.$route.params.id,
      singleUser: {},
      companyData: {}
    };
  },
  methods: {
    getSingleUser() {
      this.$store
        .dispatch("SINGLEUSER", this.singleUserId)
        .then(response => {
          this.singleUser = response.data.data;
          this.companyData = response.data.ad;
          console.log(this.singleUser);
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
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Josefin Sans", sans-serif;
}

body {
  background-color: #f3f3f3;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  .left {
    width: 35%;
    background: linear-gradient(to right, #01a9ac, #01dbdf);
    padding: 30px 25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: center;
    color: #fff;
    img {
      border-radius: 5px;
      margin-bottom: 10px;
    }
    h4 {
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
    }
  }
  .right {
    width: 65%;
    background: #fff;
    padding: 30px 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}

.wrapper .right .info,
.wrapper .right .projects {
  margin-bottom: 25px;
}

.wrapper .right .info h3,
.wrapper .right .projects h3 {
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.wrapper .right .info_data,
.wrapper .right .projects_data {
  display: flex;
  justify-content: space-between;
}

.wrapper .right .info_data .data,
.wrapper .right .projects_data .data {
  width: 45%;
}

.wrapper .right .info_data .data h4,
.wrapper .right .projects_data .data h4 {
  color: #353c4e;
  margin-bottom: 5px;
}

.wrapper .right .info_data .data p,
.wrapper .right .projects_data .data p {
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
}

.wrapper {
  .social_media ul {
    display: flex;
    li {
      width: 45px;
      height: 45px;
      background: linear-gradient(to right, #01a9ac, #01dbdf);
      margin-right: 10px;
      border-radius: 5px;
      text-align: center;
      line-height: 45px;
      a {
        color: #fff;
        display: block;
        font-size: 18px;
      }
    }
  }
}
</style>
