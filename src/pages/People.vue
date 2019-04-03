<template>
    <div>

    <NavBar />
    <h1 class="text-center">Popular People</h1>

        <div v-for="item in records" v-bind:key="item.id" style="display:inline-block; margin-left: 17px">
            <ImageCard v-bind:inputName="item.name" v-bind:inputImageUrl="item.profile_path"/>
        </div>

    </div>
</template>

<script>
import ImageCard from '../components/ImageCard'
import NavBar from '../components/NavBar'
export default {
  components: {
    ImageCard,
    NavBar
  },
  data: function () {
    return {
      records: [],
      currentPage: 1
    }
  },
  mounted () {
    this.getRecords()
  },
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + 'person/popular?api_key=' + this.$config.apiKey + '&language=en-US&page=' + this.currentPage).then(response => {
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
