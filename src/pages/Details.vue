<template>
    <div>
        <NavBar />

        <div class="row" style="margin: 30px">
            <b-col></b-col>
            <b-col md="10" style="padding: 0">
                <b-card
                    overlay
                    :img-src="$config.images.base_url + $config.images.backdrop_sizes[1] + details.backdrop_path"
                    :img-alt="details.name || details.title"
                    img-top
                >
                    <h4 slot="header" class="text-center">{{details.name || details.title}}</h4>

                    <b-card-body style="padding-top: 0">
                        <b-row class="row" style="margin-left: -40px; margin-right: -40px"
                             v-for="(item, i) in details.genres"
                             v-bind:key="i"
                        >
                            <b-col cols="2">
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    {{item.name}}
                                </b-badge>
                            </b-col>
                            <b-col class="text-right" v-if="i === 0" cols="10">
                                <b-badge variant="dark" style="background-color: rgba(0, 0, 0, 0.5)">
                                    {{startDate}}
                                </b-badge>
                            </b-col>
                        </b-row>
                    </b-card-body>

                    <b-card-body style=""></b-card-body>

                    <b-card-footer style="border-top: 0px solid black; background-color: rgba(0, 0, 0, 0); bottom: 10%; position: absolute; margin-left: -30px; margin-right: -30px">
                        <b-badge>
                            This is a footer
                        </b-badge>
                    </b-card-footer>

<!--                    <b-card-img src="" alt="Image" bottom></b-card-img>-->
                </b-card>

                <b-card>
                    <b-card-body>
                        <b-card-text>{{details.overview}}</b-card-text>
                    </b-card-body>

                    <b-list-group flush>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                    </b-list-group>

                    <b-card-body>
                        <a href="#" class="card-link">Another link</a>
                    </b-card-body>

                    <b-card-footer style="margin-bottom: 0">This is a footer</b-card-footer>

                    <b-card-img src="" alt="Image" bottom></b-card-img>
                </b-card>
            </b-col>
            <b-col></b-col>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import moment from 'moment'

export default {
  components: {
    NavBar
  },
  data: function () {
    return {
      id: this.$route.params.id,
      details: {},
      startDate: new Date()
    }
  },
  created () {
    this.$http.get(this.$config.baseUrl + this.$route.name.replace(/Details/, '') + '/' + this.id + '?api_key=' + this.$config.apiKey)
      .then(response => {
        this.details = response.data
        this.startDate = moment(this.details.release_date || this.details.first_air_date).year()
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
