<template>
    <div>

        <h1 class="text-center"><slot></slot></h1>

        <div v-for="item in records" v-bind:key="item.id" style="display:inline-block">
            <InfoCard v-bind:info="item"/>
        </div>
        <span   v-on:click="goToPage"
                v-for="item in pageNumbers"
              v-bind:key="item"
              v-text="item + ' '">
        </span>
        <br/>
        <!--<span  class="text-center">
            <router-link v-for="item in pageNumbers"
                         :to="{ params: {id: item } }"
                         v-bind:key="item"
                         class="text-dark" style="text-decoration: none"
                         replace
            >
                {{item}}
            </router-link>
        </span>-->
        <br/>
    </div>
</template>

<script>
import InfoCard from './InfoCard'

export default {
  components: {
    InfoCard
  },
  props: {
    method: {
      type: String
    },
    pageNumber: {
      type: String
    }
  },
  data: function () {
    return {
      url: '',
      pageNumbers: [],
      records: [],
      currentPage: 1,
      totalPages: 1
    }
  },
  mounted () {
    this.url = this.$route.name
    this.currentPage = this.pageNumber
    // console.log('!!!!!!!!!!!!!!!! - ', this.$router, this.currentPage)
    this.getRecords()
  },
  /* computed: {
    getPageData () {
      this.$http.get(this.$config.baseUrl + this.method + '?api_key=' + this.$config.apiKey + '&language=en-US&page=' + this.currentPage).then(response => {
        this.records = response.data.results
        this.totalPages = response.data.total_pages
        this.pageNumbers = this.$pageNav(this.currentPage, this.totalPages)
        return this.records
      }).catch(error => {
        console.log(error)
      })
    }
  }, */
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + this.method + '?api_key=' + this.$config.apiKey + '&language=en-US&page=' + this.currentPage).then(response => {
        this.records = response.data.results
        this.totalPages = response.data.total_pages
        this.pageNumbers = this.$pageNav(this.currentPage, this.totalPages)
      }).catch(error => {
        console.log(error)
      })
    },
    goToPage (event) {
      this.$router.push({ params: { id: event.target.innerText.trim() } })
    }
  }
}
</script>

<style scoped>

</style>
