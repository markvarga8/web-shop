<template>
  <div>
    {{baskets}}
    <BasketComponent
      v-for="basket in baskets"
      :key="basket.id"
      :basket="basket"
    />
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
