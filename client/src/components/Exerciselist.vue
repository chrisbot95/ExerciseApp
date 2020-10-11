<template>
<aside class="menu">
  <p class="menu-label">
    Aerobic
  </p>
  <ul class="menu-list">
    <li><a>Stationary Cycling</a></li>
    <li><a>Outdoor Cycling</a></li>
    <li><a>Walking</a></li>
    <li><a>Lap Swimming</a></li>
    <li><a>Stationary Cycling</a></li>
  </ul>
  <p class="menu-label">
    Strength
  </p>
  <p class="menu-label">
    Flexibility
  </p>
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