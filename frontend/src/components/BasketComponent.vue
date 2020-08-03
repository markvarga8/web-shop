<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row class="mb-1 ml-1">
        <b-button @click="deleteBasket" variant="secondary">Törlés</b-button>
      </b-row>
      <b-row>
        <b-col>
          <img v-bind:src="basket.thumbnailUrl">
        </b-col>
        <b-col>
          <b-card-text class="ml-2">{{basket.title}}</b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
// import ProductDto from '../dtos/ProductDto'

export default {
  props: {
    basket: Object
  },
  methods: {
    deleteBasket () {
      this.$store.dispatch('product/basketDelete', this.basket)
      alert('termék Törölve a kosárból!')
      // this.$router.go()
      console.log(this.basket)
    }
  }
}
</script>
