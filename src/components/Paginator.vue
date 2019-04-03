<template>
    <div>

    </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: 984,
      pages: 991
    }
  },
  props: {
    methodUrl: {
      type: String
    },
    totalPages: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  created () {
    // this.pages = this.totalPages
    // this.selected = this.currentPage
    this.calculate()
  },
  methods: {
    calculate () {
      let pageNumbers = []
      let interval = 3
      let gap = '...'
      let window = [this.selected - interval, this.selected + interval]

      if (window[0] > 1) {
        pageNumbers.push(1)
        if (window[0] > 2) {
          pageNumbers.push(2)
          if (window[0] > 4) {
            pageNumbers.push(gap)
          }
        }
      }
      for (var i = window[0]; i <= window[1]; i++) {
        if (i > 0) {
          pageNumbers.push(i)
        }
      }
      if (window[1] <= this.pages - 4) {
        pageNumbers.push(gap)
        pageNumbers.push(this.pages - 1)
        pageNumbers.push(this.pages)
      } else if (window[1] < this.pages - 3) {
        pageNumbers.push(this.pages - 2)
        pageNumbers.push(this.pages - 1)
        pageNumbers.push(this.pages)
      } else if (window[1] < this.pages - 2) {
        pageNumbers.push(this.pages - 1)
        pageNumbers.push(this.pages)
      } else if (window[1] < this.pages - 1) {
        pageNumbers.push(this.pages)
      }

      console.log(pageNumbers)
    }
  }
}
</script>

<style scoped>

</style>
