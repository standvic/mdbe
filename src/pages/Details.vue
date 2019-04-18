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
                                <b-badge style="background-color: rgba(0, 0, 0, 0.5)">
                                    {{startDate}}
                                </b-badge>
                            </b-col>
                        </b-row>
                    </b-card-body>

                    <b-card-body style=""></b-card-body>

                    <b-card-footer style="border-top: 0px solid black; background-color: rgba(0, 0, 0, 0); bottom: 10%; position: absolute; ">
                        <b-row v-if="$route.name === 'movieDetails'" style="margin-left: -40px; margin-right: -40px;">
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Status:&nbsp;{{details.status}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Runtime:&nbsp;{{details.runtime}}m
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Budget:&nbsp;${{details.budget}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Vote average:&nbsp;{{details.vote_average}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    <a :href="details.homepage" target="_blank" style="color: black">Homepage</a>
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    IMDb Id:&nbsp;{{details.imdb_id}}
                                </b-badge>
                            </b-col>
                        </b-row>

                        <b-row v-if="$route.name === 'tvDetails'" style="margin-left: -40px; margin-right: -40px;">
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Status:&nbsp;{{details.status}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Episodes:&nbsp;{{details.number_of_episodes}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Seasons:&nbsp;{{details.number_of_seasons}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Type:&nbsp;{{details.type}}
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    <a :href="details.homepage" target="_blank" style="color: black">Homepage</a>
                                </b-badge>
                            </b-col>
                            <b-col>
                                <b-badge variant="light" style="background-color: rgba(255, 255, 255, 0.5)">
                                    Episode runtime:&nbsp;{{details.episode_run_time[0]}}m
                                </b-badge>
                            </b-col>
                        </b-row>
                    </b-card-footer>

                </b-card>

                <b-card>
                    <b-card-body>
                        <b-card-text>{{details.overview}}</b-card-text>
                    </b-card-body>
                    <div style="overflow-x: auto;">
                        <div
                            style="display: inline-block; float: left; width: 45px"
                            v-for="item in cast"
                           :key="item.cast_id"
                        >
                            <img
                                v-if="item.profile_path"
                                v-bind:src="$config.images.base_url + $config.images.profile_sizes[0] + item.profile_path"
                            />
                            <span style="font-size: 6pt">{{item.name}}</span>
                        </div>
                    </div>
                    <b-card-body>
                        <a href="#" class="card-link">Another link</a>
                    </b-card-body>

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
      startDate: new Date(),
      cast: []
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

    this.$http.get(this.$config.baseUrl + this.$route.name.replace(/Details/, '') + '/' + this.id + '/credits' + '?api_key=' + this.$config.apiKey)
      .then(response => {
        this.cast = response.data.cast
        console.log(this.cast)
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
