<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row>
        <b-row>
          <b-col>
            <img v-bind:src="basket.thumbnailUrl">
          </b-col>
          <b-col>
            <b-card-text class="ml-2">{{basket.title}}</b-card-text>
          </b-col>
        </b-row>
        <b-row class="mx-auto">
          <b-button class="mt-3" @click="deleteBasket" variant="secondary">Törlés</b-button>
        </b-row>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    basket: Object
  },
  computed: mapState({
    baskets: (state) => state.product.basket
  }),
  methods: {
    deleteBasket () { // eslint-disable-next-line
      const result = this.baskets.filter((item) => item.id !== this.basket.id)
      this.$store.dispatch('product/basketDelete', result)
      alert('termék Törölve a kosárból!')
    }
  }
}
</script>
