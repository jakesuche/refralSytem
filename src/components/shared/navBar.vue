<template>
    <nav class="navbar navbar-light bg-light fixed-top">
        <button type="button" @click="logout" v-if="authUser()"  class="navbar-brand"> Logout  </button>
        
    </nav>
</template>

<script>
export default {
    data(){
        return {
            data:this.$store.state.user

        }
    },
    created(){
       this.$store.dispatch('getAuthUser')
    },
    methods:{
        authUser(){
            return this.$store.state.user
        },
        logout(){
            localStorage.removeItem('my-token')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>