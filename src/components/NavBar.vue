<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="info">
            <b-navbar-brand href="#">
                <router-link :to="{ path: '/' }">
                    <img src="static/img/logo.png" title="Movie database Explorer">
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item
                        v-for="itemNav in menu"
                        v-bind:key="itemNav.id">
                        <router-link :to="{ name: itemNav.url, params: { id: itemNav.start } }" replace class="text-dark" style="text-decoration: none">
                            {{itemNav.item}}
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right v-if="sessionId">
                        <template slot="button-content"><em v-html="userName"></em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item :to="{ path: 'login' }">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item v-else>
                        <router-link :to="{ path: 'login' }" class="text-danger" style="text-decoration: none">
                            <em>Login</em>
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
  data () {
    return {
      sessionId: localStorage.getItem('sessionId'),
      userName: localStorage.getItem('userName')
    }
  },
  props: {
    menu: {
      type: Array,
      default: function () {
        return [
          { id: 1, item: 'Movies', url: 'movies', start: 1 },
          { id: 2, item: 'TV Series', url: 'tvs', start: 1 },
          { id: 3, item: 'People', url: 'people', start: 1 }
        ]
      }
    }
  }
}
</script>
