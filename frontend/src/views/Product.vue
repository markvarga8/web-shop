<template>
  <div>
    <div v-if="loading" class="text-center">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <b-row>
      <b-card class="m-3" style="width: 20rem;" v-for="item in items" :key="item.id">
        <b-row>
          <b-col>
            <b-form-checkbox v-model="checked" name="check-button" switch>
            </b-form-checkbox>
            <img v-bind:src="item.thumbnailUrl">
          </b-col>
          <b-col>
            <b-card-text class="ml-2">{{item.title}}</b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created () {
    this.$store.dispatch('product/getPhotos')
  },
  computed: mapState({
    items: (state) => state.product.photos,
    loading: (state) => state.product.loading

  }),
  data: () => ({
    checked: false
  })
}
</script>
