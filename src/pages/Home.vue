<template>
    <div class="full-width center-content">
        <!---->
        <NavBar v-bind:menu="[
              { id: 1, name: 'Movies' },
              { id: 2, name: 'People' }
            ]"/>
    </div>
</template>

<script>
import NavBar from '../components/Common/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>
