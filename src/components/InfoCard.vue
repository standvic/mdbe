<template>
    <div>
        <b-card
                border-variant="info"
                no-body class="overflow-hidden"
                style="max-width: 540px; height:270px; margin-bottom: 20px; margin-left: 10px"
        >
            <b-row no-gutters>
                <b-col md="4">
                    <a href="#">
                        <b-card-img v-bind:src="imageUrl + record.poster_path" class="rounded-0" />
                    </a>
                </b-col>
                <b-col md="8">
                    <div class="text-center" style="position: absolute;
                                                    top: 0;
                                                    right: 0;
                                                    padding: 5px;
                                                    margin-top: 0;
                                                    margin-right: 0;"
                    >
                        <b-badge pill style="background-color: #741a47">
                            75
                        </b-badge>
                    </div>
                    <b-card-body v-bind:title="record.title || record.name">
                        <b-card-text v-html="record.overview" style="height: 130px; overflow-y: hidden; font-size: 11pt; word-wrap: break-word; white-space: normal; text-overflow: ellipsis;">
                        </b-card-text>
                    </b-card-body>
                    <a class="text-info" href="#">
                        <div class="text-center" style="position: absolute; bottom: 0; padding: 10px; margin-bottom: 0; border-top: #17a2b8 1px solid; width: 100%;">
                            Details
                        </div>
                    </a>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      record: {},
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
  }
}
</script>

<style scoped>

</style>
