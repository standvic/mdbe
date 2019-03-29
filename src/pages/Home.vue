<template>
    <div class="full-width center-content">

        <NavBar />

        <b-container>
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row class="text-center">
                <b-col class="bg-light">
                    <h3 class="bg-info text-light">Popular</h3>
                </b-col>
                <b-col class="bg-light">
                    <h3 class="bg-info text-light">Top Rated</h3>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row align-h="center" class="bg-light">
                <h4 class="bg-warning text-dark">Movies</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col class="bg-light">
                    <BriefCard v-bind:method="'movie/popular'"/>
                </b-col>
                <b-col class="bg-light">
                    <BriefCard v-bind:method="'movie/top_rated'" />
                </b-col>
            </b-row>
        </b-container>

        <b-container class="bg-light">
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row align-h="center" class="bg-light">
                <h4 class="bg-warning text-dark">TV Series</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col class="bg-light">
                    <BriefCard  v-bind:method="'tv/popular'" />
                </b-col>
                <b-col class="bg-light">
                    <BriefCard v-bind:method="'tv/top_rated'"  />
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import BriefCard from '../components/BriefCard'

export default {
  components: {
    NavBar,
    BriefCard
  }
}
</script>
