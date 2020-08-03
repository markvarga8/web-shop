<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row class="mb-1 ml-1">
        <b-button @click="uploadBasket" variant="secondary">Kosárba</b-button>
      </b-row>
      <b-row>
        <b-col>
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
// import ProductDto from '../dtos/ProductDto'
import { mapState } from 'vuex'

export default {
  props: {
    item: Object
  },
  computed: mapState({
    items: (state) => state.product.photos,
    loading: (state) => state.product.loading,
    basket: (state) => state.product.basket
  }),
  data: () => ({
    checked: false,
    itemArr: []
  }),
  methods: {
    uploadBasket () {
      if (!this.basket) {
        this.itemArr.push(this.item)
        this.$store.dispatch('product/basket', this.itemArr)
      } else {
        this.$store.dispatch('product/basket', this.item)
      }
      alert('termék a kosárba helyezve!')
      console.log(this.item)
    }
  }
}
</script>
