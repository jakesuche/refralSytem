<template>
  <div class="row">
    <section class="col-md-7">
      <h1>Welcome to biggie</h1>
      <img :src="image" style="margin-top:40px" />
    </section>
    <section class="col-md-4 login_area ">
      <form>
        <div class="form-group " for="email">
          <label class="control-label">Email</label>
          <input
            type="email"
            v-model="form.email"
            name="email"
            id="email"
            placeholder="Email here"
            class="form-control"
          />
        </div>
        <div class="form-group" for="password">
          <label class="control-label">Password</label>
          <input
            type="password"
            name="password"
            v-model="form.password"
            placeholder="password!"
            id="password"
            class="form-control"
          />
        </div>
        <div class="form-group text-right">
          <button @click.prevent="loginUser" type="button" class="btn btn-primary btn-block">
            Log in
          </button>
        </div>

        <div class="form-group text-right">
          <router-link
            to="/register"
            class="btn btn-success btn-block"
            id="btn-createAccount"
            >Create Acount</router-link
          >
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import image from "@/assets/background-image.png";
export default {
  data() {
    return {
      image,
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods:{
      loginUser(){
          this.$store.dispatch('loginUser', this.form)
          .then(()=>{
            const name = localStorage.getItem('username')
            this.$vs.notification({
            progress: "auto",
            color: "#7d33ff",
            position: "top-center",
            title: "Succcessful login",
            text: `welcome ${name}`,
          });
          this.$router.push('/me')
          })
          .catch(err=>{
              console.log(err.response)
            this.$vs.notification({
            progress: "auto",
            color: "warn",
            position: "top-center",
            title: "login failed",
            text: `welcome ${err.response.data.message}`,
          });
          })
      }
  }
};
</script>

<style scoped>
label {
  float: left !important;
}
</style>
