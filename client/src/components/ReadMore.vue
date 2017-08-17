<template>
    <div>
        <button class="back" @click="goBack">Назад</button>
        <div class="container">
            <div v-html="descriptionOfCompany">
            </div>
            <div>
                {{this.$store.getters.getVacancyById.title}}
            </div>
            <a :href="urlOfVacancy" target="_blank">{{urlOfVacancy}}</a>
        </div>
    </div>

</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        vacanyy: {}
      }
    },
    computed:{
      descriptionOfCompany(){
        return this.$store.getters.getVacancyById.descriptionOfCompany;
      },
      urlOfVacancy(){
        return this.$store.getters.getVacancyById.urlOfVacancy;
      }
    },
    methods: {
      goBack(){
        window.history.back();
      }
    },
    created: function() {
      this.$store.dispatch('getVacancyById', this.$route.params.id);
    }
  }

</script>

<style scoped>
    .container {
        display: block;
        box-sizing: border-box;
        margin-left: 250px;
        overflow-wrap: break-word;
    }
    .back {
        position: fixed;
        margin: 30px 0 0 100px;
        padding: 10px;
        border: 1px blueviolet solid;
        border-radius: 6px;
        background-color: #039BE5;
    }

</style>
