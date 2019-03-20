<template>
    <div class="full-width center-content">

        <NavBar v-bind:menu="[
              { id: 1, name: 'Movies' },
              { id: 1, name: 'TV Series' },
              { id: 2, name: 'People' }
            ]"/>

        <b-container>
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row class="text-center">
                <b-col style="background-color: #FCE1E5">
                    <h3>Popular</h3>
                </b-col>
                <b-col style="background-color: lightcyan">
                    <h3>Top Rated</h3>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row align-h="center" style="background-color: aliceblue">
                <h4>Movies</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col style="background-color: #FCE1E5">
                    <BriefCard v-bind:method="'movie/popular'"/>
                </b-col>
                <b-col style="background-color: lightcyan">
                    <BriefCard v-bind:method="'movie/top_rated'" />
                </b-col>
            </b-row>
        </b-container>

        <b-container style="background-color: aliceblue">
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row align-h="center" style="background-color: aliceblue">
                <h4>TV Series</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col style="background-color: #FCE1E5">
                    <BriefCard  v-bind:method="'tv/popular'" />
                </b-col>
                <b-col style="background-color: lightcyan">
                    <BriefCard v-bind:method="'tv/top_rated'"  />
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <h6>&nbsp;</h6>
        </b-container>

    </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import BriefCard from '../components/common/BriefCard'

export default {
  components: {
    NavBar,
    BriefCard
  }
}
</script>
