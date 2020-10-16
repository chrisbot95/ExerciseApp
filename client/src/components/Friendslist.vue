<template>
<aside class="menu">
  <p class="menu-label">
    Your Friends
  </p>
  <ul class="menu-list">
    
    <li><a v-for="x in profiles"
                  :key= "x">
    <span class="icon is-small is-left">
    <i class="fas fa-user"></i>
    </span>
    {{x}}
    </a></li>
  </ul>
</aside>
</template>

<script>
import { profiles } from "@/models/profiles";
export default {
  data(){
        return {
            profiles
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