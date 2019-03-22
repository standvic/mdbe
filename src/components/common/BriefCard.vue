<template>
    <div>
        <b-card border-variant="light" no-body class="overflow-hidden bg-light" style="max-width: 540px">
            <b-row no-gutters>
                <b-col md="6" class="bg-light">
                    <b-card-img v-bind:src="imageUrl + record.poster_path" class="rounded-0" />
                </b-col>
                <b-col md="6">
                    <b-card-body class="bg-light">
                        <b-card-text v-html="record.overview" style="max-height: 430px;overflow-y: auto">
                        </b-card-text>
                        <b-button variant="outline-info">Details</b-button>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>

export default {
  data: function () {
    console.log(this.$config.images.base_url)
    return {
      record: {},
      imageUrl: this.$config.images.base_url + this.$config.images.poster_sizes[6]
    }
  },
  props: {
    method: {
      type: String
    }
  },
  mounted () {
    this.getRecords()
  },
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + this.method + `?api_key=` + this.$config.apiKey + '&language=en-US').then(response => {
        this.record = response.data.results[Math.floor(Math.random() * response.data.results.length)]
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>

</style>
