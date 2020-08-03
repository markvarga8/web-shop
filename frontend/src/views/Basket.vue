<template>
  <div>
    <b-nav-item href="#" v-b-modal.modal-1>
      <b-modal id="modal-1" title="Kosár">
        <b-card class="m-3" style="width: 20rem;">
          <b-row class="mb-1 ml-1">
            <b-button @click="uploadBasket" variant="secondary">Kosárba</b-button>
          </b-row>
          <b-row>
            <b-col>
              <img v-bind:src="basket.thumbnailUrl">
            </b-col>
            <b-col>
              <b-card-text class="ml-2">{{item.title}}</b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </b-modal>
      <b-icon-basket id="icon" class="h1 mb-2" variant="secondary">
      </b-icon-basket>
    </b-nav-item>
  </div>
</template>

<script>
import ProductDto from '../dtos/ProductDto'

export default {
  props: {
    basket: ProductDto
  }
}
</script>
