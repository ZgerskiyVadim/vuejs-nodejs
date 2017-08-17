<template>
    <div>

        <section class="divSettings">
            <h1>SETTINGS</h1>
            <div class="boxOfInputs">
                <div class="inputs" @keyup.enter="updateUser(user)">
                    Name<div><input class="inputsInSettings" type="text" v-model="user.userName" placeholder="Name"></div>
                    Number<div><input class="inputsInSettings" type="text" v-model="user.number" placeholder="Number"></div>
                    City<div><input class="inputsInSettings" type="text" v-model="user.city" placeholder="City"></div>
                    Password<div><input class="inputsInSettings" type="password" v-model="user.password" placeholder="Password" ></div>
                </div>
                <div></div>
            </div>
            <div id="confirm">
                <button @click="updateUser(user)" id="buttonConfirm">Confirm settings</button>
                <button @click="getAllVacancies" id="buttonConfirm">getAllVacancies</button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    userName: "",
                    number: "",
                    city: "",
                    password: "****"
                }
            }
        },
        methods: {
            updateUser(user){
                console.log(user);
                this.$store.dispatch('UpdateUser', user);
            },
          getAllVacancies(){
              this.$store.dispatch('getAllVacancies');
          }
        }
    }
</script>

<style scoped>
    .divSettings {
        background: #58a3a3;
        height: 60vh;
    }
    h1{
        display: flex;
        justify-content: center;
        margin: 0;
    }
    .boxOfInputs {
        display: flex;
        justify-content: space-around;
        height: 40vh;
        align-items: flex-end;
        margin: 0 100px 0 100px;
    }
    .inputs {
        flex-direction: column;
        align-items: flex-end;
    }
    .inputs input {
        width: 400px;
        border: 2px forestgreen solid;
    }
    #confirm {
        display: flex;
        justify-content: flex-end;
        margin: 30px 70vh 0 510px
    }
    #buttonConfirm {
        background-color: rgb(17, 93, 185);
        padding: .5em 1.3em;
        border: none;
        border-radius: 5px;
        color: snow;
    }
    #buttonConfirm:hover { background: rgb(127, 207, 255); }
    #buttonConfirm:active { background: rgb(94, 126, 152); }
</style>