<template>
    <div>
        <h1 class="text-center"><slot></slot></h1>

        <div
            v-for="item in records"
            v-bind:key="item.id"
            style="display:inline-block"
        >
            <InfoCard
                    v-bind:info="item"
            />
        </div>

        <div class="mt-3">
            <b-pagination v-model="currentPage"
                          :total-rows="totalPages"
                          :per-page="1"
                          v-on:input="goToPage"
                          align="center"
                          :limit="9"
            >
            </b-pagination>
        </div>
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
    }
  },
  data: function () {
    return {
      records: [],
      currentPage: 1,
      totalPages: 1
    }
  },
  mounted () {
    this.getRecords(this.currentPage)
  },
  methods: {
    getRecords (page) {
      this.$http.get(this.$config.baseUrl + this.method + '?api_key=' + this.$config.apiKey + '&language=en-US&page=' + page).then(response => {
        this.records = response.data.results
        this.totalPages = response.data.total_pages
      }).catch(error => {
        console.log(error)
      })
    },
    goToPage (page) {
      this.getRecords(this.currentPage)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>

</style>
