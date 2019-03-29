<template>
    <div class="full-width center-content">

    <NavBar v-bind:menu="[
              { id: 0, item: 'Movies' },
              { id: 1, item: 'TV Series' },
              { id: 2, item: 'People' }
            ]"/>
    <h1 class="text-center">Movies</h1>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
