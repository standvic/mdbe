<template>
    <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img v-bind:src="photo" class="rounded-0" />
                </b-col>
                <b-col md="6">
                    <b-card-body title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    photo: String
  }
}
</script>

<style scoped>

</style>
