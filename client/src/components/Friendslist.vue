<template>
<aside class="menu">
  <p class="menu-label">
    Your Friends
  </p>
  <ul class="menu-list">
    
    <li>
      <a id="button">
      <a v-for="(x, i) in profiles"
                  :key = "i"
                  :i = "i"
                  :profile = "x">
    <span class="icon is-small is-left">
    <i class="fas fa-user"></i>
    </span>
    {{x.handle}}
    </a></a></li>
  </ul>
</aside>
</template>

<script>
import { profiles } from "@/models/profiles";
export default {
  props: {
        profile: Object,
        i: Number
  },
  data(){
        return {
            profiles,
            currentComponent: 'default comp'
        }
    },
}
</script>

<style>
    .menu{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>