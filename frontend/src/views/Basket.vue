<template>
  <div>
    <b-row v-if="baskets[0]">
      <BasketComponent
        v-for="basket in baskets"
        :key="basket.id"
        :basket="basket"
      />
    </b-row>
    <b-row v-if="!baskets[0]">
      <b-card class="mx-auto bg-info m-3" style="width: 25rem;" align="center">
        <b-row>
          <b-col>
            <b-card-text>Jelenleg nincsenek termékek a kosaradban</b-card-text>
          </b-col>
          <b-col>
            <b-button href="/product" variant="secondary">Kattints ide a termékek megtekintéséhez</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BasketComponent from '../components/BasketComponent'

export default {
  computed: mapState({
    baskets: (state) => state.product.basket
  }),
  components: {
    BasketComponent
  }
}
</script>
