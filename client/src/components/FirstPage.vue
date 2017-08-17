<template>
    <div>
        <Pagination :totalNumber='getTotalNumber' @numberOfPage="getNumberOfPage"></Pagination>
        <div class="mainContainer">
            <Filtration></Filtration>
            <div class="container">
                <div class="post" v-for="vacancy in vacancies">
                    <div class="title">
                        {{vacancy.tittle}}
                        {{vacancy.companyName}}
                        {{vacancy.city}}
                        {{vacancy.typeOfEmployment}}
                        {{vacancy.dateOfPublication}}
                        {{vacancy.workHours}}
                        <i class="material-icons">star_border</i>
                    </div>
                    <div class="description">
                        <span v-html="vacancy.descriptionOfCompany"></span>
                    </div>
                    <div>
                        {{vacancy.adressOfCompany}}
                    </div>
                    <router-link :to= "{name: 'readMore', params: {id: vacancy.vacancyId}}" >
                        <button class="button">Подробнее</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Pagination from './Pagination.vue'
  import Filtration from './Filtration.vue'
  import {mapGetters} from 'vuex'
  export default {
    components: {Pagination, Filtration},
    computed:{
      ...mapGetters({   //Чтобы работал spread оператор нужно установить babel-preset-stage-2 и заюзать его в .babelrc ["stage-2"]
        vacancies: 'getVacancies',
        getTotalNumber: 'getTotalNumber',
        getOptions: 'getOptions'
      })
    },
    methods: {
      getNumberOfPage(number){
        this.getOptions.params.numberOfPage = number;
        this.$store.dispatch('getAllVacancies', this.getOptions);
      }
    },
    created () {
      this.$store.dispatch('getAllVacancies', this.getOptions);
    }
  }
</script>

<style scoped>
    .mainContainer {
        display: flex;
        flex-direction: row;
    }
    .container {
        display: block;
        box-sizing: border-box;
        margin-top: 20px;
    }
    .title {
        background-color: #039BE5;
    }
    .post {
        border: 2px black solid;
        background-color: rgba(135, 251, 100, 0.47);
        margin-bottom: 10px;
        max-height: 200px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .description {
        overflow: hidden;
        height: 120px;
        width: 600px;
        line-height: 25px;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .material-icons {
        display: flex;
        flex-direction: row-reverse;
    }
</style>