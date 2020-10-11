<template>
<aside class="menu">
  <p class="menu-label">
    Your Friends
  </p>
  <ul class="menu-list">
    <li><a>Princess Wilson</a></li>
    <li><a>Ashley Johnson</a></li>
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