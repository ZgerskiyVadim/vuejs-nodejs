<template>
    <div>
        <div class="label">
            <div class="container">
                <form class="singin-form">
                    <div class="auth-form-body">

                        <div class="try">
                            <h2>Sign In</h2>
                        </div>
                        <br>
                        <table class="singin-table">
                            <tr>
                                <td>
                                    <label for="login_field">Email address:</label>
                                </td>
                            </tr>
                            <tr>
                                <input v-model="user.email" autofocus="autofocus" class="form-control input-block" id="login_field"/>
                            </tr>
                            <br>
                            <tr>
                                <td><label for="password">Password:</label></td>
                            </tr>
                            <tr>
                                <input v-model="user.password" class="form-control form-control input-block" id="password" type="password"/>
                            </tr>
                            <br>
                            <br>
                            <tr class='tr'>
                                <input class="btn" type="submit" value="Sign in" @click="singIn(user)"/>
                            </tr>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import axios from 'axios'

  export default {
    name: 'singIn',
    data () {
      return {
        user:{
          email: '',
          password:''
        }
      }
    },
    methods: {
      singIn(user){
        this.$store.dispatch('SingIn', user);
      }
    }
  }
</script>


<style scoped>
    .container {
        text-align: left;
        color: white;
        margin-top: 30px;
        padding: 20px 50px 50px 50px;
        width: 550px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.15);
        background-image: url(/src/img/blue.jpg);
        background-position: center;
        background-attachment: fixed;
    }
    .label {
        width: 550px;
        height: 200px;
        margin: 30px auto;
        text-align: center;
        border-radius: 20px;
        color: red;
        background-color: #EF7F35;
        box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
        padding-left: 5px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #ff7f2b;
    }
    label {
        color: white;
        font-size: 15px;
    }
    input{
        background-color: white;
        border-bottom-color: grey;
        border-radius: 5px;
        color: black;
        padding-left: 5px;
        border: none!important;
        position: relative;
        height: 35px;
        box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
        margin-bottom: 0;
        outline: 0!important;
    }
    .btn {
        background-color: #ff7f2b;
        margin: auto;
        width: 100px;
        height: 40px;
    }
    .btn {
        color: white;
        background-color: #EF7F35;
        width: 200px;
        border-radius: 5px;
        height: 40px;
        padding-left: 20px;
        border: none;
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
        cursor: pointer;
        text-align: center;
    }
    .btn:active {
        transform: translateY(4)
    }

    .btn:hover{
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);
    }
    .tr {
        text-align: center;
    }
    .try {
        text-align: center;
        margin-right: 10px;
        margin-top:0px;
    }
</style>
