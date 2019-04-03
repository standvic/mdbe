<template>
    <div class="full-width center-content">

        <NavBar />
        <FilmList v-bind:method="'tv/popular'">TV Series</FilmList>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FilmList from '../components/FilmList'

export default {
  components: {
    FilmList,
    NavBar
  }
}
</script>

<style scoped>

</style>
