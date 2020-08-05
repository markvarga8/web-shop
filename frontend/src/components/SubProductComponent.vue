<template id="child-template">
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row>
        <b-row>
          <b-col>
            <img v-bind:src="item.thumbnailUrl">
          </b-col>
          <b-col>
            <b-card-text class="ml-2">{{item.title}}</b-card-text>
          </b-col>
        </b-row>
        <b-row v-if="!status" v-model="status" class="mx-auto">
          <b-button class="mt-3" @click="uploadBasket" variant="secondary">Kosárba</b-button>
        </b-row>
        <b-row v-if="status" v-model="status" class="mx-auto">
          <b-button class="mt-3" @click="deleteBasket" variant="secondary">Törlés</b-button>
        </b-row>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import store from '../store'

export default {
  data: () => ({
    item: store.state.product.detail,
    baskets: store.state.product.basket,
    basketStatus: false,
    itemArr: []
  }),
  computed: {
    status () {
      const result = this.baskets.filter((basket) => basket.id === this.item.id)
      if (result[0]) { // eslint-disable-next-line
        return true
      }
      return false
    }
  },
  methods: {
    uploadBasket () {
      if (!this.baskets) {
        this.itemArr.push(this.item)
        this.$store.dispatch('product/basket', this.itemArr)
      } else {
        this.$store.dispatch('product/basket', this.item)
      }
      alert('termék a kosárba helyezve!')
    },
    deleteBasket () { // eslint-disable-next-line
      const result = this.baskets.filter((basket) => basket.id !== this.item.id)
      this.$store.dispatch('product/basketDelete', result)
      alert('termék Törölve a kosárból!')
      this.$router.go()
    },
    renderDetails () {
      this.$store.dispatch('product/renderDetails', this.item)
    }
  }
}
</script>
