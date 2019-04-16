<template>
    <div class="full-width center-content">

        <NavBar />

        <b-jumbotron lead="Login to your account">
            <p>
                In order to use the editing and rating capabilities of <abbr title="The Movie DB">TMDb</abbr>, as well as get personal
                recommendations you will need to login to your account. If you do not have an account,
                <a href="https://www.themoviedb.org/account/signup">register</a> in TMDb site
            </p>

            <b-form @submit="onSubmit" v-if="show">
                <b-form-group
                        id="userNameGroup"
                        label="Username:"
                        label-for="userName"
                >
                    <b-form-input
                            id="userName"
                            type="text"
                            v-model="form.userName"
                            required
                            placeholder="Enter Username" />
                </b-form-group>

                <b-form-group id="passwordGroup" label="Password:" label-for="password">
                    <b-form-input
                            id="password"
                            type="password"
                            v-model="form.item"
                            required
                            placeholder="Enter password" />
                </b-form-group>

                <b-button type="submit" variant="info">Login</b-button>
            </b-form>
        </b-jumbotron>

        <b-modal v-bind:hide-header-close="true" v-bind:hide-footer="true" v-bind:visible="this.messageVisible" id="message" title="ERROR!">
            <p v-html="this.message"></p>
        </b-modal>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import router from '../router'

export default {
  components: {
    NavBar
  },
  data: function () {
    return {
      form: {
        userName: '',
        item: ''
      },
      message: '',
      messageVisible: false,
      show: true
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    initPage () {
      this.$config.token = ''
      this.$config.sessionId = ''
      this.$config.userName = ''
      localStorage.setItem('userName', '')
      localStorage.setItem('sessionId', '')
    },
    onSubmit (evt) {
      evt.preventDefault()

      this.$http.get(this.$config.baseUrl + 'authentication/token/new?api_key=' + this.$config.apiKey)
        .then(result => {
          if (result.data.success === true) {
            this.$config.token = result.data.request_token
            this.$config.userName = this.form.userName
            localStorage.setItem('userName', this.form.userName)
            return this.$http.post(
              this.$config.baseUrl + 'authentication/token/validate_with_login?api_key=' + this.$config.apiKey,
              {
                'username': this.form.userName,
                'item': this.form.item,
                'request_token': this.$config.token
              }
            )
          } else {
            return 'Has not any token'
          }
        })
        .then(result => {
          if (result.data.success === true) {
            return this.$http.post(
              this.$config.baseUrl + 'authentication/session/new?api_key=' + this.$config.apiKey,
              {
                'request_token': this.$config.token
              }
            )
          } else {
            return 'Invalid username and/or item: You did not provide a valid login'
          }
        })
        .then(result => {
          if (result.data.success === true) {
            this.$config.sessionId = result.data.session_id
            localStorage.setItem('sessionId', result.data.session_id)
            router.push('*')
          }
        })
        .catch(error => {
          this.messageVisible = true
          this.message = error.response.data.status_message
        })
    }
  }
}
</script>

<style scoped>

</style>
