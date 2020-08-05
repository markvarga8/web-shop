<template>
  <div>
    <b-card class="m-3" style="width: 20rem;">
      <b-row>
        <b-row>
          <b-col>
            <a @click="renderDetails" href="/subproduct">
              <img v-bind:src="item.thumbnailUrl">
            </a>
          </b-col>
          <b-col>
            <a @click="renderDetails" href="/subProduct">
              <b-card-text id="text" class="ml-2">{{item.title}}</b-card-text>
            </a>
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
  props: {
    item: Object
  },
  data: () => ({
    items: store.state.product.photos,
    baskets: store.state.product.basket,
    loading: store.state.product.loading,
    basketStatus: false,
    itemArr: []
  }),
  computed: {
    status () {
      if (this.baskets) {
        const result = this.baskets.filter((basket) => basket.id === this.item.id)
        if (result[0]) { // eslint-disable-next-line
          return true
        }
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

<style>
  #text {
    color: gray;
  }
  a {
    text-decoration: none !important;
  }
</style>
