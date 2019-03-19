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
                <b-col>
                    <h3>Popular</h3>
                </b-col>
                <b-col>
                    <h3>Latest</h3>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row align-h="center">
                <h4>Movies</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row align-h="center">
                <h4>TV Series</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <h6>&nbsp;</h6>
        </b-container>

        <b-container>
            <b-row align-h="center">
                <h4>People</h4>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
                <b-col>
                    <BriefCard v-bind:photo="'https://picsum.photos/300/250/?random'" />
                </b-col>
            </b-row>
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
