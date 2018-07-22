<template> 
 <v-jumbotron color="primary">
  <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar  color="success">
                <v-toolbar-title>{{'auth.welcome' | translate}}</v-toolbar-title>
                <v-spacer>
                </v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
               <v-form >
                  <v-text-field v-model="auth.user" prepend-icon="person" name="login"   type="text" placeholder="Username"  required ></v-text-field>
                  <v-text-field v-model="auth.password" prepend-icon="lock" name="password"   id="password" type="password"  placeholder="Password" required ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click.native="loader = 'loading'"
                >
                {{'auth.login' | translate}}
              </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
 </v-jumbotron>
</template>

<script>
import auth from '../action/'


export default {
  name: 'login',
  data () {
    return {
         loader: null,
        loading: false,
      auth: {
        username: '',
        password: '',
        redirect: '',
        labelu: auth.user,
        labelp: auth.password
      }
    }
  },watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => 
        {
          this[l] = false
          this.submit()
          }, 1000)
 
        this.loader = null
        
       
      }
    },
  methods:
  {
    submit () {
      var credentials = {
        username: this.auth.user,
        password: this.auth.password
     
      }
     
        auth.login(this, credentials,'/home',this.$t('auth.logged'))
      //   .then(()=>{
      //     this.$swal('Good job!', credentials.username, 'success')
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    .mddown
     {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
