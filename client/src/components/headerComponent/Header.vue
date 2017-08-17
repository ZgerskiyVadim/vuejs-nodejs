<template>
    <div>
        <header>
            <div class="header">
                <div class="routersLinks">
                    <div class="imageExposit">
                        <router-link to="/">
                            <img src="/src/img/exposit3.png">
                        </router-link>
                    </div>
                    <div class="routerLink">
                        <router-link to="/">
                            <p>Главная</p>
                        </router-link>
                    </div>
                </div>

                <div></div>

                <div class="someBlock">
                    <DropDown v-if="checkToken"></DropDown>
                    <router-link to="/singIn">
                        <button class="button" v-if="!checkToken">Войти</button>
                    </router-link>
                    <router-link to="/registration" v-if="!checkToken">
                        <button class="button">Регистрация</button>
                    </router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
  import DropDown from './DropDown.vue'
  export default{
    components: {DropDown},
    computed: {
      checkToken(){
        return localStorage.getItem('tokenKey');
      }
    }
  }
</script>

<style scoped>
    header {
        padding: 0;
        margin: 0;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .routersLinks {
        display: flex;
    }
    .routerLink {
        margin-left: 10px;
    }
    .someBlock {
        display: flex;
    }
    .button {
        margin-left: 10px;
        line-height: 20px;
        background-color: #ef7f35;
        padding: .5em 1.3em;
        border: none;
        border-radius: 5px;
        color: snow;
        position: relative;
    }
    .imageExposit {
        height: 0;
    }

</style>
