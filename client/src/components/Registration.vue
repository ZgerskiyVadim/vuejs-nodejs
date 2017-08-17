<template>
    <div class = "container">
        <div class="registration_cont">
            <br>
            <div class="try">
                <h2>Registration</h2>
            </div>
            <br>
            <table>
                <tr>
                    <div class="try">
                        <label class="lbl">
                            <p>Name:</p>
                        </label>
                    </div>
                </tr>
                <tr>
                    <div class="login">
                        <input type="text" maxlength="16" v-model="newUser.name" placeholder="Login" >
                        <br>
                    </div>
                </tr>
                <tr>
                    <div class="try">
                        <label class="lbl">
                            <p>Email:</p>
                        </label>
                    </div>
                </tr>
                <tr>
                    <div class="email">
                        <input type="email" name="Email" v-model="newUser.email" placeholder="Email"><br>
                    </div>
                </tr>

                <tr>
                    <div class="try">
                        <label class="lbl">
                            <p>City:</p>
                        </label>
                    </div>
                    <div class="select">
                        <select name="city" v-model="newUser.city">
                            <option value="" disabled selected hidden>Select city</option>
                            <option>Брест</option>
                            <option>Витебск</option>
                            <option>Гомель</option>
                            <option>Гродно</option>
                            <option>Минск</option>
                        </select>
                    </div>
                </tr>
                <tr>
                    <div class="try">
                        <label class="lbl">
                            <p>Password:</p>
                        </label>
                    </div>
                </tr>
                <tr>
                    <div class="password">
                        <input type="password" v-model="newUser.password" placeholder="Password" maxlength="16" >
                    </div>
                    <br>
                </tr>
                <tr>
                    <div class="try">
                        <label class="lbl">
                            <p>Confirm password:</p>
                        </label>
                    </div>
                </tr>
                <tr>
                    <div class="password conf">
                        <input type="password" v-model="password2" placeholder="Repeat password" maxlength="16">
                        <br>
                    </div>
                </tr>
                <br>
                <br>
                <tr class="checkbox_tr">
                    <div class="checkbox">
                        <p>I want to receive newsletters about new vacancies</p>
                        <input type="checkbox" class = "chbox" id="chbox" v-model="newUser.dispatch">
                    </div>
                </tr>
                <br>
                <tr>
                    <button v-if="this.getPassword && checkAllFileds" @click.prevent="onSignUp(newUser)">
                        SING UP
                    </button>
                </tr>
            </table>
        </div>
    </div>


</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import axios from 'axios'

  export default {
    name: "registration",
    data() {
      return {
        newUser: {
          name: '',
          email: '',
          city: '',
          password: '',
          dispatch: false
        },
        password2: ""
      }
    },
    computed: {
      checkAllFileds(){
        return (this.newUser.name && this.newUser.email && this.newUser.city && this.newUser.name && this.getPassword)
      },
      getPassword(){
        if (this.newUser.password !== '' && this.password2 !== '') {
          return (this.newUser.password === this.password2);
        }
      }
    },
    methods: {
      onSignUp(newUser){
        console.log(newUser);
      }
    }
  }
</script>

<style scoped>
    <style scoped>
    * {
        background-color: #039BE5;
        color: white;
        margin: auto;
    }

    table{
        table-layout: fixed;
        margin: auto;
    }
    p {
        color: black
    }


    .registration_cont {
        padding-top: 1px;
        background-color: #088ecc;
        background-image: url(/src/img/blue.jpg);
        background-position: center;
        background-attachment: fixed;
        padding-bottom: 40px;
        border-radius: 15px;
        width: 550px;
        margin: auto;


    }

    .container {
        width: 550px;
        height: 200px;
        margin: 30px auto;
        text-align: center;
        border-radius: 20px;
        color: red;
        background-color: #EF7F35;
        box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
        padding-left: 10px;

    }

    tr{
        line-height: 0px;

    }



    input {
        border-radius: 5px;
        width: 250px;
        margin-top: 0px;
    }



    select {
        width: 250px;
        text-align: center;
        border-radius: 5px;
        height: 26px;
    }

    button {
        color: white;
        background-color: #EF7F35;
        width: 300px;
        border-radius: 5px;
        height: 40px;
        margin-left: 20px;
        border: none;
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
        cursor: pointer;
        text-align: center;

    }

    button:active {
        transform: rotateY(2px);
    }

    button:hover{
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.5);
    }

    .try{
        text-align: left;
    }

    .checkbox{
        display: block;
        margin-bottom: 10px;
        width: 480px;
        padding-bottom: 10px;
        vertical-align: top;
        position: relative;


    }

    .try{
        margin: auto;
        max-width: 350px;
        padding-bottom: 5px;
        margin-bottom: -8px;
        font-size: 16px;
    }

    .login, .email, .select, .password{
        margin: auto;
        max-width: 350px;
        text-align: left;
    }

    input, select {
        width: 350px;
        border: none;
        padding-left: 5px;
        height: 35px;
        box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
        border-radius: 5px;
        color: black;
        background-color: #fff;
        outline: 0;
    }

    input:focus, select:focus, input:active, select:active{
        box-shadow: 0px 0px 3px 1.5px firebrick;
    }
    input:hover, select:hover {
        box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.50);
    }

    .input:focus{
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    select {
        width: 355px;
        display: inline-block;
        height: 35px;
        color: #D1D1D1;
        padding-left: 2px;
        padding-right: 2px;
    }
    select:checked, select:focus, select:active {
        color: black;
        box-shadow: none;
    }
    .error_control {
        text-align: left;
    }
    .checkbox {
        max-width: 360px;
        text-align: left;
        margin: auto;
        margin-top: 25px;
    }
    .checkbox input {
        width: 14px;
        vertical-align: bottom;
        margin-bottom: 15px;
        border-radius: 0;
        opacity: 1!important;
        position: absolute;
        left: 350px;
        top: -3px;
        background-color: none;
        box-shadow: none;
    }
    #chbox:focus, #chbox:focus, #chbox:active, #chbox:active{
        box-shadow: none;
    }
    option{
        color: black;
    }
    h2 {
        text-align: center;
        width: 350px;
    }
    p {
        color: white;
        font-size: 17px;
    }
    span {
        position: absolute;
        font-size: 14px;
        color: white;
        font-style: italic;
        opacity: 0.9;
    }
    input{
        margin-bottom: 0px;
        border: none!important;
    }
    br{
        display: block;
        margin: 10px 0;
        content: " ";
    }
    select {
        display: inline-block;
    }
    td{
        width: 250px;
        border: none;
    }
    .left_col {
        width: 130px;
        border-bottom: 1px solid white;
    }
    .checkbox p {
        display: inline-block;
        padding-right: 10px;
    }
    h2{
        color: white;
    }
    .checkbox p{
        font-size: 15px;
    }
</style>
