<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
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
  </div>
</template>

<script>
import ProductDto from '../dtos/ProductDto'
import { mapState } from 'vuex'

export default {
  props: {
    item: { ProductDto }
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
