<template>
  <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
      <!-- Profile widget -->
      <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4 cover">
          <div class="media align-items-end profile-head">
            <div class="profile mr-3">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt="..."
                width="130"
                class="rounded mb-2 img-thumbnail"
              /><a href="#" class="btn btn-outline-dark btn-sm btn-block"
                >Edit profile</a
              >
            </div>
            <div class="media-body mb-5 text-white">
              <h4 class="mt-0 mb-0">{{ user }}</h4>

              <p class="small mb-4">
                <i class="fas fa-map-marker-alt mr-2"></i>Nigeria
              </p>
            </div>
          </div>
        </div>
        <div class="bg-light p-4 d-flex justify-content-end text-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">{{userData.downliners.length}}</h5>
              <small class="text-muted">
                <i class="fas fa-image mr-1"></i>Downliners</small
              >
            </li>
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">{{userData.totalpoints}}</h5>
              <small class="text-muted">
                <i class="fas fa-user mr-1"></i>Points</small
              >
            </li>
          
          </ul>
        </div>
        <div class="px-4 py-3">
          <h5 class="mb-0">About the game</h5>
          <div class="p-4 rounded shadow-sm bg-light">
            <p class="font-italic mb-0">For each member that registers with your link guarantees 10 points  and your have 100 points to make it. Good luck</p>
            <p class="font-italic mb-0">Share your referal link to friend and family</p>
            <p class="font-italic mb-0">Photographer</p>
          </div>
          <h5 class="mb-0">Your downliners</h5>
          <div class="p-4 rounded shadow-sm bg-light">
            <p class="font-italic mb-0">For each member that registers with your link guarantees 10 points  and your have 100 points to make it. Good luck</p>
            <p class="font-italic mb-0">Share your referal link to friend and family</p>
            <p class="font-italic mb-0">Photographer</p>
          </div>
        </div>
        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 @click="isOpen = !isOpen" class="mb-0 btn btn-primary">
              Show referal link
            </h5>
            <a href="#" class="btn btn-link text-muted">Show all</a>
          </div>
          <div class="row" v-show="isOpen">
            <div
              class="col-md-12"
              style="background:grey;color:whitesmoke!important"
            >
              <code style="color:whitesmoke!important">
                {{ referral() }}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    this.$store.dispatch("getReferral");
  },
  methods: {
    referral() {
      const link = this.$store.state.referal
        ? this.$store.state.referal.generatedRefLink
        : "";
      return link || "";
    },
  },
  computed: {
    user() {
      const user = this.$store.getters["authUser"]
        ? `${this.$store.getters["authUser"].firstname} ${this.$store.getters["authUser"].lastname} `
        : "";
      return user;
    },
    userData(){
        return this.$store.getters["authUser"]
    }
  },
};
</script>

<style scoped>
.profile-head {
  transform: translateY(5rem);
}

.cover {
  background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}

body {
  background: #654ea3;
  background: linear-gradient(to right, #e96443, #904e95);
  min-height: 100vh;
}
</style>
