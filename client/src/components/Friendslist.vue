<template>
<aside class="menu">
  <p class="menu-label">
    Your Friends
  </p>
  <ul class="menu-list">
    
    <li><a>
      <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>  Princess Wilson</a></li>
    <li><a><span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>  Ashley Johnson</a></li>
  </ul>
</aside>
</template>

<script>
export default {
    props: {
        friendslist: Object
    }
}
</script>

<style>
    .menu{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>