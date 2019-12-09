<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <m-button>Hello World Material Design</m-button>

    <m-card>
  <template slot="actions">
    <m-button>
      Save
    </m-button>
    <m-button>
      Cancel
    </m-button>
  </template>
</m-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  @import "material-components-vue/dist/button/styles";
  @import "material-components-vue/dist/card/styles";
</style>
