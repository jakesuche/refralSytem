<template>
  <div class="row">
    <section class="col-md-7">
      <h1>Welcome to biggie</h1>
      <div class="alert alert-success">
          {{messageref}}
      </div>
      <img :src="image" style="margin-top:40px" />
    </section>
    <section class="col-md-4 login_area ">
      <form>
        <div class="form-group " for="Firstname">
          <label class="control-label">Firstname</label>
          <input
            type="text"
            id="email"
            placeholder="Firstname"
            v-model="form.firstname"
            class="form-control"
          />
        </div>
        <div class="form-group " for="email">
          <label class="control-label">Lastname</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Lastname"
            v-model="form.lastname"
            class="form-control"
          />
        </div>
        <div class="form-group " for="email">
          <label class="control-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            v-model="form.email"
            class="form-control"
          />
        </div>
        <div class="form-group " for="email">
          <label class="control-label">Phone</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Phone number"
            v-model="form.phone"
            class="form-control"
          />
        </div>
        <div class="form-group" for="password">
          <label class="control-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password!"
            id="password"
            v-model="form.password"
            class="form-control"
          />
        </div>
        <div class="form-group text-right">
          <button
            @click.prevent="registerUser"
            type="button"
            class="btn btn-primary btn-block"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import image from "@/assets/background-image.png";
export default {
  data() {
    return {
      image,
      form: {
        lastname: null,
        firstname: null,
        email: null,
        phone: null,
        password: null,
      },
      messageref:''
    };
  },
  created(){
      this.getReferedUser()
  },
  methods: {

    registerUser() {
    let query = this.$route.query['reflink']
    console.log(query)
    let data ={form:this.form, query}
      this.$store
        .dispatch("registerUser", data )
        .then(() => {
          this.$vs.notification({
            progress: "auto",
            color: "#7d33ff",
            position: "top-center",
            title: "Succcessful registration",
            text: `Account Registered Succcessful`,
          });
          this.$router.push("/login");
        })
        .catch((err) => {

          console.log(err.response);
          let error = err.response["data"]["errors"];
          error.forEach((error) => {
            this.$vs.notification({
              progress: "auto",
              color: "warn",
              position: "top-center",

              text: `${error.message}`,
            });
          });
        });
    },

    getReferedUser() {
        const query = this.$route.query['reflink']
        
        axios.get(`/api/v1/refered?reflink=${query}`).then(res=>{
              this.messageref = res.data['message']
        })
    },
  },
};
</script>

<style scoped>
label {
  float: left !important;
}
</style>
