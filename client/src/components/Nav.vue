<template>

<nav class="navbar container is-fixed-top is-danger is-fluid" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/logo.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive }">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item" >Home</router-link>
      <router-link to="/friends" class="navbar-item" >Friends</router-link>
      <router-link to="/exercises" class="navbar-item" >Exercises</router-link>
      <router-link to="/about" class="navbar-item" >About</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/signup" class="button">
            <strong>Sign up</strong>
          </router-link>
            <router-link to="/login" class="button is-light">
              Log in
            </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  data: ()=>({
    isActive: false
  }),
  methods: {

  }
}
</script>

<style>

</style>