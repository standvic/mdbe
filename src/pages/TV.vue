<template>
    <div class="full-width center-content">

        <NavBar />
        <FilmList v-bind:title="'TV Series'" v-bind:method="'tv/popular'" />

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
