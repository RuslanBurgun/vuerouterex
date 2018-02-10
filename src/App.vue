<template>
  <div id="app">
    <nav>
      <ul>
        <li> <router-link :to="{ name: 'home' }">Home</router-link></li>
        <li> <router-link :to="{ name: 'about' }">about</router-link></li>
        <li> <router-link :to="{ name: 'contact' }">contact</router-link></li>
      </ul>
    </nav>
    <router-view>loading</router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
