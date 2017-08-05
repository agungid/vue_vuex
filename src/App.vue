<template>
  <div id="app" class="container">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/partial/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
