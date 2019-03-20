<template>
    <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img v-bind:src="imageUrl + record.poster_path" class="rounded-0" />
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-card-text v-html="record.overview">
                        </b-card-text>
                        <b-button variant="outline-info">Details</b-button>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>

import config from '../../config/config.js'

export default {
  data: () => ({
    record: {},
    imageUrl: config.posW500Url
  }),
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
      this.$http.get(config.baseUrl + this.method + `?api_key=` + config.apiKey + '&language=en-US').then(response => {
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
