<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row>
        <b-col>
          <img v-bind:src="filterByItem[0].thumbnailUrl">
        </b-col>
        <b-col>
          <b-card-text class="ml-2">{{filterByItem[0].title}}</b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('product/getPhotos')
  },
  data: () => ({
    checked: false
  }),
  computed: {
    filterByItem () {
      const photos = this.$store.state.product.photos
      const index = this.$store.state.product.index
      const result = photos.filter((item) => item.id === index + 1)
      return result
    }
  }
}
</script>
