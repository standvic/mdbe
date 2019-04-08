<template>
    <div class="full-width center-content">

    <NavBar />
    <FilmList
            v-bind:method="'movie/popular'"
            v-bind:pageNumber="pageNumber"
    >
        Movies
    </FilmList>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FilmList from '../components/FilmList'

export default {
  components: {
    FilmList,
    NavBar
  },
  data: function () {
    return {
      pageNumber: 1
    }
  },
  mounted () {
    this.pageNumber = this.$route.params.id
    console.log('Movies - ', this.pageNumber)
  }
}
</script>

<style scoped>

</style>
