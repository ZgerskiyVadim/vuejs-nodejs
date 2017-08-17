<template>
    <div>
        <div class="pagination">
            <div class="pagination_midl">
                <div class="pagination_mid">
                    <ul>
                        <li v-for="numberOfPage in getNumberOfPage">
                            <a @click="changePage(numberOfPage)">
                                <a class='wrap_a' :class="{current: currentPage == numberOfPage}">{{numberOfPage}}</a>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      totalNumber: {
        type: Number,
        default: 1
      },
      itemsPerPage: {
        type: Number,
        default: 10
      }
    },
    data(){
      return {
        currentPage: 1
      }
    },
    computed: {
      getNumberOfPage (){
        return Math.ceil(this.totalNumber/this.itemsPerPage);
      }
    },
    methods: {
      changePage(numberOfPage){
        this.currentPage = numberOfPage;
        this.$emit('numberOfPage', numberOfPage);
      }
    }
  }

</script>

<style scoped>

    * {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .pagination {
        margin-top: 15px;
        margin-bottom: 15px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: nowrap;
        justify-content: center;
    }
    .pagination_mid {
        flex-flow: nowrap;
        justify-content: center;
        display: flex;
        margin-left: auto;
        width: 100%
    }
    .pagination_midl {
        flex-flow: nowrap;
        justify-content: center;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 85%
    }
    .wrap_a>a:hover {
        text-decoration: none;
    }
    .wrap_a:hover, a.current {
        box-shadow: inset rgba(0, 0, 0, 0.21) 0 0 1px;
        background-color: #FAF8FF;
        border-color: #ff9b52;
    }

    .wrap_a:active {
        box-shadow: inset rgba(0,0,0,.6) 0 0 2px;
    }
    .wrap_a {
        display: block;
        width: 40px;
        height: 40px;
        border: 1px solid #D3D1D8;
        opacity: 1;
        padding: 3px;
        padding-top: 5px;
        border-radius: 7px;
        box-shadow: inset rgba(0,0,0,.1) 0 0 2px;
        text-decoration: none !important;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

</style>