<template>
    <div>
        <b-card
                v-bind:title="name"
                v-bind:img-src="baseUrl + src"
                img-alt="Image"
                img-top
                tag="article"
                style="width: 235px;
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
    console.log(this.inputImageUrl)
    if (this.inputImageUrl) {
      this.baseUrl = this.$config.images.base_url + this.$config.images.profile_sizes[1]
      this.src = this.inputImageUrl
    } else {
      this.baseUrl = ''
      this.src = 'https://source.unsplash.com/random/' + document.querySelector('.card-img-top').clientWidth + 'x' + document.querySelector('.card-img-top').clientHeight
    }
  }
}
</script>

<style scoped>

</style>
