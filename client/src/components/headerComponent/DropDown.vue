<template>
    <div>
        <div class="showButtonFlex">
            <button id="showProfileButton" @mouseover="showProfile">{{getNameOfUser}}</button>
        </div>
        <div></div>
        <div class="profileBox">
            <transition name="fade">
                <div class="profileFlex" v-if="show">
                    <router-link to="/settings"><button>Настройки</button>
                    </router-link>
                    <router-link to="/favoriteVacancies"><button>Vacancies</button></router-link>
                    <button @click="logOut()">Log out</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    computed: {
      getNameOfUser(){
        return localStorage.getItem('userName');
      }
    },
    methods: {
      logOut() {
        localStorage.clear();
        location.href = '/';
      },
      showProfile() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
    #showProfileButton {
        line-height: 20px;
        background-color: #ef7f35;
        padding: .5em 1.3em;
        border: none;
        border-radius: 5px;
        color: snow;
        position: relative;
    }
    .profileFlex {
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-top: 10px;
        box-shadow:  0 1px 10px 0 #6389b9;
        z-index: 1;
        width: 200px;
        background-color: white;
        border-radius: 5px;

    }
    .profileFlex button {
        background-color: #039BE5;
        color: white;
        border: none;
        width: 100%;
        margin-bottom: 1px;
        padding: 10px 5px;

    }
    .profileFlex button:hover { background: rgb(127, 207, 255); }
    .profileFlex button:active { background: rgb(94, 126, 152); }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }



</style>
