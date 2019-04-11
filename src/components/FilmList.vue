<template>
    <div>

        <div class="row" style="margin: 20px">
            <b-col md="2">
                <h4><slot></slot></h4>
            </b-col>
            <b-col md="3">
                <b-form inline>
                    <label for="sort-by">Sort by</label>
                    <b-form-select
                            id="sort-by"
                            class="text-left"
                            v-on:change="doQuery"
                            v-model="sortChoice"
                            :options="Object.keys(sortByQuery)"
                    ></b-form-select>
                </b-form>
            </b-col>
            <b-col md="1">
                <b-form inline>
                    <label for="year">Year</label>
                    <b-form-select
                            id="year"
                            class="text-left"
                            v-on:change="doQuery"
                            v-model="yearChoice"
                            :options="Object.keys(years)"
                    ></b-form-select>
                </b-form>
            </b-col>
            <b-col md="2">
                <b-form inline>
                    <label for="genre">Genre</label>
                    <b-form-select
                            id="genre"
                            class="text-left"
                            v-on:change="doQuery"
                            v-model="genreChoice"
                            :options="Object.keys(genres)"
                    ></b-form-select>
                </b-form>
            </b-col>
        </div>

        <div
            v-for="item in records"
            v-bind:key="item.id"
            style="display:inline-block"
        >
            <InfoCard
                    v-bind:info="item"
            />
        </div>

        <div class="mt-3">
            <b-pagination v-model="currentPage"
                          :total-rows="totalPages"
                          :per-page="1"
                          v-on:input="goToPage"
                          align="center"
                          :limit="9"
            >
            </b-pagination>
        </div>

    </div>
</template>

<script>
import InfoCard from './InfoCard'

export default {
  components: {
    InfoCard
  },
  data: function () {
    return {
      records: [],
      currentPage: 1,
      totalPages: 1,
      method: 'discover/' + this.$route.name,
      sortChoice: 'Popularity Descending',
      sortByQuery: {
        'Popularity Descending': 'popularity.desc',
        'Popularity Ascending': 'popularity.asc',
        'Rating Descending': 'vote_average.desc',
        'Rating Ascending': 'vote_average.asc',
        'Release Date Descending': this.$route.name === 'movie' ? 'release_date.desc' : 'first_air_date.desc',
        'Release Date Ascending': this.$route.name === 'movie' ? 'release_date.asc' : 'first_air_date.asc'
      },
      yearChoice: new Date().getFullYear(),
      years: this.getYears(),
      genreChoice: this.$route.name === 'movie' ? 'Action' : 'Action & Adventure',
      genres: {}
    }
  },
  mounted () {
    this.getRecords(this.currentPage)
  },
  methods: {
    getRecords () {
      this.$http.get(this.$config.baseUrl + 'genre/' + this.$route.name + '/list' + '?api_key=' + this.$config.apiKey)
        .then(response => {
          var allGenres = {}
          response.data.genres.forEach(function (item, i) {
            var obj = {}
            obj[item.name] = item.id
            Object.assign(allGenres, obj)
          })
          this.genres = allGenres
          return allGenres
        })
        .then(allGenres => {
          return this.$http.get(this.$config.baseUrl + this.method +
            '?api_key=' + this.$config.apiKey +
            '&language=en-US&page=' + this.currentPage +
            '&sort_by=' + this.sortByQuery[this.sortChoice] +
            (() => this.$route.name === 'movie' ? '&primary_release_year=' + this.yearChoice : '&first_air_date_year=' + this.yearChoice)() +
            (() => allGenres ? '&with_genres=' + allGenres[this.genreChoice] : '')() +
            '&vote_count.gte=0')
        })
        .then(response => {
          this.records = response.data.results
          this.totalPages = response.data.total_pages <= 1000 ? response.data.total_pages : 1000
        }).catch(error => {
          console.log(error)
        })
    },
    goToPage () {
      this.getRecords()
      this.$forceUpdate()
    },
    doQuery () {
      this.currentPage = 1
      this.method = 'discover/' + this.$route.name
      this.getRecords()
      this.$forceUpdate()
    },
    getYears () {
      var items = []
      for (var i = 1874; i <= new Date().getFullYear(); i++) {
        items[i] = i
      }
      return items
    }
  }
}
</script>

<style scoped>

</style>
