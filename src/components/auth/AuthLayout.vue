<template>
<v-app>
  <div class="auth-layout">
    <router-view></router-view>
    </div>
</v-app>
</template>

<script>
import auth from '../auth/action'
  export default {
  
    name: 'AuthLayout',
     data () {
    return {
      auth: {
        username: '',
        password: '',
        redirect: ''
      }
    }
  },
  methods:
  {
    submit () {
      var credentials = {
        username: this.auth.user,
        password: this.auth.password
      }
      this.$swal('Good job!', credentials.username, 'success').then(() => {
        auth.login(this, credentials, '/admin')
      })
    }
  }
  }
</script>

<style lang="scss" scoped>
 @import "src/sass/variables";

  .auth-layout {
    height: 100vh;
    margin: 0;
    
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: $brand-primary;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .i-vuestic {
          z-index: 2;
          height: $auth-wallpaper-ivuestic-h;
          width: 100%;
        }
        // .oblique {
        //   position: absolute;
        //   background-color: $lighter-gray;
        //   left: calc(50% - 27%/2);
        //   transform: rotate(15deg);
        //   width: 27%;
        //   height: 115%;
        // }
      }
    }
 
      .mdown {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }

  }

.auth-layout {
  height: 100vh;
  margin: 0;
}
.auth-layout .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 5.625rem;
    background-color: #333;
}
.auth-layout .nav .i-vuestic {
      height: 1.5rem;
      width: 100%;
}
.auth-layout .main {
    margin: 0;
    height: 100%;
}
.auth-layout .main .auth-content {
      padding: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      background-color: white;
}
.auth-layout .main .auth-wallpaper {
      background-color: #333;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
}
.auth-layout .main .auth-wallpaper .i-vuestic {
        z-index: 2;
        height: 2.625rem;
        width: 100%;
}
.auth-layout .main .auth-wallpaper .oblique {
        position: absolute;
        background-color: "";
        left: calc(50% - 27%/2);
        -webkit-transform: rotate(15deg);
                transform: rotate(15deg);
        width: 27%;
        height: 115%;
}
@media (max-width: 991.98px) {
.auth-layout .main {
      height: calc(100% - 5.625rem);
}
.auth-layout .main .auth-content {
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        padding-top: 2.875rem;
}
}
</style>
