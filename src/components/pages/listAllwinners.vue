<template>
    <div class="container" >
<ul class="list-group">
  <li class="list-group-item" v-for="user in users" :key="user._id">Cras justo odio</li>
 
</ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            users:[]
        }
    },
    created(){
        axios.get('/api/v1/admim').then(res=>{
            this.users = res.data['users']
        })
    }

}
</script>

<style>

</style>