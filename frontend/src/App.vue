<template>
  <div id="app">
    <NavigationComponent />
    <b-container>
      <router-view/>
    </b-container>
    <FooterComponent />
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    NavigationComponent,
    FooterComponent
  }
}
</script>
