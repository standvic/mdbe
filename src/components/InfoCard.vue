<template>
    <div>
        <b-card
                border-variant="info"
                no-body class="overflow-hidden"
                style="max-width: 540px;
                       height:270px;
                       margin-bottom: 20px;
                       margin-left: 10px"
        >
            <b-row no-gutters>
                <b-col md="4">
                    <router-link :to="{ name: $route.name + 'Details', params: { id: record.id } }" replace class="text-dark" style="text-decoration: none">
                        <b-card-img
                                v-if="record.poster_path"
                                v-bind:src="imageUrl + record.poster_path"
                                class="rounded-0"
                        />
                        <b-card-img
                                v-else
                                v-bind:src="'https://source.unsplash.com/random/600x900'"
                                class="rounded-0"
                        />
                    </router-link>
                </b-col>
                <b-col md="8">
                    <div class="text-center" style="position: absolute;
                                                    top: 0;
                                                    left: 0;
                                                    padding: 5px;
                                                    margin-top: 0;
                                                    margin-left: 0;
                                                    font-size: 8pt;
                                                    color: #741a47"
                    >
                        <i v-text="startDate"></i>
                    </div>
                    <div class="text-center" style="position: absolute;
                                                    top: 0;
                                                    right: 0;
                                                    padding: 5px;
                                                    margin-top: 0;
                                                    margin-right: 0;"
                    >
                        <b-badge pill style="background-color: #741a47" v-text="record.vote_average"></b-badge>
                    </div>
                    <b-card-body v-bind:title="record.title || record.name">
                        <b-card-text v-html="record.overview" style="height: 130px;
                                                                     overflow-y: hidden;
                                                                     font-size: 11pt;
                                                                     word-wrap: break-word;
                                                                     white-space: normal;
                                                                     text-overflow: ellipsis;">
                        </b-card-text>
                    </b-card-body>
                    <router-link :to="{ name: $route.name + 'Details', params: { id: record.id } }" replace class="text-dark" style="text-decoration: none">
                        <div class="text-center" style="position: absolute;
                                                        bottom: 0;
                                                        padding: 10px;
                                                        margin-bottom: 0;
                                                        border-top: #17a2b8 1px solid;
                                                        width: 100%;"
                        >
                            Details
                        </div>
                    </router-link>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  data: function () {
    return {
      record: {},
      startDate: new Date(),
      imageUrl: this.$config.images.base_url + this.$config.images.poster_sizes[2]
    }
  },
  props: {
    info: {
      type: Object
    }
  },
  mounted () {
    this.record = this.info
    this.startDate = moment(this.info.release_date || this.info.first_air_date).format('LL')
  }
}
</script>

<style scoped>

</style>
