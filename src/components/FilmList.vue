<template>
    <div>

        <h1 class="text-center">{{title}}</h1>

        <div v-for="item in records" v-bind:key="item.id" style="display:inline-block">
            <InfoCard v-bind:info="item"/>
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
    },
    title: {
      type: String
    }
  },
  data: function () {
    return {
      records: []
    }
  },
  mounted () {
    this.getRecords()
  },
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + this.method + '?api_key=' + this.$config.apiKey + '&language=en-US').then(response => {
        this.records = response.data.results
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
