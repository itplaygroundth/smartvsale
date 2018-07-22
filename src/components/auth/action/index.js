import Router from '../../../router'
import axios from 'axios'
import swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
const API_URL = 'http://vps434.vpshispeed.net:3005/sapi/'
const LOGIN_URL = API_URL + 'getdb/'
//const SIGNUP_URL = API_URL + 'register/'

export default {
  user: {
    authenticated: false
  },
    // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect,txt) {

    axios.post(LOGIN_URL, creds)
    .then((data) => {
      sessionStorage.setItem('token', data.token)
      swal(txt,creds.username,'success');

       Router.push(redirect)
    }).catch((err) => {
      alert(err)
       
    })
  },
  // signup (context, creds, redirect) {
  //   context.$http.post(SIGNUP_URL, creds, (response) => {
  //     alert(response.data)
  //   }).error((err) => {
  //     context.error = err
  //   })
  // },

    // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },
  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
      // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
