<template>
    <div>
        <b-card
                v-bind:title="name"
                v-bind:img-src="baseUrl + src"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 235px;
                       height: 440px;
                       margin: 10px"
                class="mb-2"
        >
        </b-card>
    </div>
</template>

<script>
export default {
  date: function () {
    return {
      name: '',
      src: '',
      baseUrl: ''
    }
  },
  props: {
    inputName: {
      type: String
    },
    inputImageUrl: {
      type: String
    }
  },
  created () {
    this.name = this.inputName
    this.baseUrl = this.$config.images.base_url + this.$config.images.profile_sizes[3]
    this.src = this.inputImageUrl
  }
}
</script>

<style scoped>

</style>
