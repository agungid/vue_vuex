<template>
  <div class="hello" style="text-align:center">
    <h1>{{ msg }}</h1>
    <h2>Learn Vue (FRONTEND) & Feathers (Backend REST)</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Selamat Datang di Aplikasi SPA Sederhana'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
