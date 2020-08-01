<template>
  <div>
    <div v-if="loading" class="text-center">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <b-row>
      <ProductComponent
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductComponent from '../components/ProductComponent'

export default {
  components: {
    ProductComponent
  },
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
