<template>
    <div>

        <h1 class="text-center"><slot></slot></h1>

        <div v-for="item in records" v-bind:key="item.id" style="display:inline-block">
            <InfoCard v-bind:info="item"/>
        </div>
        <Paginator />
    </div>
</template>

<script>
import InfoCard from './InfoCard'
import Paginator from './Paginator'

export default {
  components: {
    InfoCard,
    Paginator
  },
  props: {
    method: {
      type: String
    }
  },
  data: function () {
    return {
      records: [],
      currentPage: 1,
      totalPages: 0
    }
  },
  mounted () {
    this.getRecords()
  },
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + this.method + '?api_key=' + this.$config.apiKey + '&language=en-US&page=' + this.currentPage).then(response => {
        this.records = response.data.results
        this.totalPages = response.data.total_pages
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
