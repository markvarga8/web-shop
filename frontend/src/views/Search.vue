<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row>
        <b-col>
          <b-form-checkbox v-model="checked" name="check-button" switch>
          </b-form-checkbox>
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
      // console.log(result)
      return result
    }
  },
  methods: {
    /* filterByItem () {
      const photos = this.$store.state.product.photos
      const index = this.$store.state.product.index
      const result = photos.filter((item) => item.id === index + 1)
      console.log(this.$store.state.product.index)
    } */
  }
}
</script>
