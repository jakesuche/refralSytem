<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/shared/navBar'
import "bootstrap/dist/css/bootstrap.min.css";


export default {
  name: 'App',
  components: {

    Navbar
    
  },
  created(){
      this.$store.dispatch('getAuthUser')
  }
 
}
   
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
    background-color: #eee

}

.custom-nav{
    background-color:rgb(22, 50, 92);

}
.custom-nav .navbar-brand{
    color:#fff;
}
/* .custom-nav .navbar-brand:hover{ */
    /* font-size: 30px */
/* } */
.custom-nav .navbar-brand:hover{
    transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    -moz-transition: all 400ms ease-in-out;
    -ms-transition: all 400ms ease-in-out;
    -o-transition: all 400ms ease-in-out;
   
}


.custom-nav .navbar-brand:hover,
.custom-nav .navbar-brand:focus {
    color:#eee;
}

.custom-nav .navbar-nav > li > a {
    color: #fff
} 


.custom-nav .navbar-nav > li > a:hover{
    color: #eee;
}
.custom-nav .navbar-brand:hover > li > a:hover,
.custom-nav .navbar-brand:hover > li > a:focus{
    color: #eee;
    background-color: transparent;

}

.upload_area, .newest_images_area, .start_area, .latest_comments_area, .popular_images_area,.image_area,.comment_area{
    background-color: #fff;
    margin-bottom: 5vh;
    min-height:40vh;
    /* min-width: 100vh; */
}



.image_area img{
    width: 100%;
    max-height:500px;
    
}
.image_area > div {
    padding: 5px 15px
}
.image_area p {
    margin:0px 2% 0px 2%
}

.start_area, .latest_comments_area, .popular_images_area{
    margin-bottom: 5vh;
    min-height: 22vh;
}



/* comment section */
header + div{
    padding:5px 15px
}

.comment_area{
    min-height: 5vh
}


/* comment section stop  */

header{
    background:rgb(22, 50, 92);
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 10px
}
.design_upload:hover{
    transform:translateY(5px);
    -webkit-transform:translateY(5px);
    -moz-transform:translateY(5px);
    -ms-transform:translateY(5px);
    -o-transform:translateY(5px);
}
.design_upload{
    transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    -moz-transition: all 400ms ease-in-out;
    -ms-transition: all 400ms ease-in-out;
    -o-transition: all 400ms ease-in-out;
}


footer{
    background-color: rgb(22, 50, 92);
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
    
    min-height: 10vh;
    padding-top:20px;
}

/* for login area section */
.login_area{
    background-color: #fff;
    margin:60px 0px 160px;
    padding:20px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    

}

.login_area:hover{
    box-shadow: 3px 3px 10px 2px #888888;

}
.login_area:focus{
    box-shadow: 3px 3px 10px 2px #888888;

}
.login_area{
    transition: all 600ms ease-in-out;
    -webkit-transition: all 600ms ease-in-out;
    -moz-transition: all 600ms ease-in-out;
    -ms-transition: all 600ms ease-in-out;
    -o-transition: all 600ms ease-in-out;
}

body{
    background-color: #eee

}

.custom-nav{
    background-color:rgb(22, 50, 92);

}
.custom-nav .navbar-brand{
    color:#fff;
}
/* .custom-nav .navbar-brand:hover{ */
    /* font-size: 30px */
/* } */
.custom-nav .navbar-brand:hover{
    transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    -moz-transition: all 400ms ease-in-out;
    -ms-transition: all 400ms ease-in-out;
    -o-transition: all 400ms ease-in-out;
   
}


.custom-nav .navbar-brand:hover,
.custom-nav .navbar-brand:focus {
    color:#eee;
}

.custom-nav .navbar-nav > li > a {
    color: #fff
} 


.custom-nav .navbar-nav > li > a:hover{
    color: #eee;
}
.custom-nav .navbar-brand:hover > li > a:hover,
.custom-nav .navbar-brand:hover > li > a:focus{
    color: #eee;
    background-color: transparent;

}

.upload_area, .newest_images_area, .start_area, .latest_comments_area, .popular_images_area,.image_area,.comment_area{
    background-color: #fff;
    margin-bottom: 5vh;
    min-height:40vh;
    /* min-width: 100vh; */
}



.image_area img{
    width: 100%;
    max-height:500px;
    
}
.image_area > div {
    padding: 5px 15px
}
.image_area p {
    margin:0px 2% 0px 2%
}

.start_area, .latest_comments_area, .popular_images_area{
    margin-bottom: 5vh;
    min-height: 22vh;
}



/* comment section */
header + div{
    padding:5px 15px
}

.comment_area{
    min-height: 5vh
}


/* comment section stop  */

header{
    background:rgb(22, 50, 92);
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 10px
}
.design_upload:hover{
    transform:translateY(5px);
    -webkit-transform:translateY(5px);
    -moz-transform:translateY(5px);
    -ms-transform:translateY(5px);
    -o-transform:translateY(5px);
}
.design_upload{
    transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    -moz-transition: all 400ms ease-in-out;
    -ms-transition: all 400ms ease-in-out;
    -o-transition: all 400ms ease-in-out;
}


footer{
    background-color: rgb(22, 50, 92);
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
    
    min-height: 10vh;
    padding-top:20px;
}

/* for login area section */
.login_area{
    background-color: #fff;
    margin:60px 0px 160px;
    padding:20px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    

}

.login_area:hover{
    box-shadow: 3px 3px 10px 2px #888888;

}
.login_area:focus{
    box-shadow: 3px 3px 10px 2px #888888;

}
.login_area{
    transition: all 600ms ease-in-out;
    -webkit-transition: all 600ms ease-in-out;
    -moz-transition: all 600ms ease-in-out;
    -ms-transition: all 600ms ease-in-out;
    -o-transition: all 600ms ease-in-out;
}


#firstname-help-block,#lastname-help-block,#password-help-block,#confirmpassword-help-block{
    color: red !important;

}

#fontSize{
    color:darkmagenta;
    font-weight:900;
    font-style: oblique;
    font-family: sans-serif;
    font-size:15px
}


.chat_area{
    min-height: 80vh;
}
.chat_room{
    height: 450px;
    background-color: whitesmoke;
    overflow: scroll;
}
.userMessage, .myMessage, .serverMessage{
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    max-width: 80%;
    float: left;
    display: block;
    clear: both;
}
.userMessage{
    background-color: lightpink;
    border-radius: 25px 50px;
    border-top-left-radius: 0px;
}
.myMessage{
    background-color: lightblue;
    float: right;
    border-radius: 50px 25px;
    border-top-right-radius: 0px;
}
.serverMessage{
    background-color: lightgreen;
    border-radius: 25px 50px;
    border-top-left-radius: 0px;
    color: white;
}

</style>

