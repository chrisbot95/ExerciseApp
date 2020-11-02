<template>
<div class='columns'>
  <div class='column is-one-third'>
    <aside class="menu">
      <p class="menu-label">
        Your Friends
      </p>
      <ul class="menu-list">
        <li>
          <a v-for="(x, i) in profiles"
                  :key = "i"
                  :i = "i"
                  :profile = "x">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            {{x.handle}}
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div class='column is-two-thirds'>
    <div class="card" v-for="(x, i) in profiles"
                  :key = "i"
                  :i = "i"
                  :profile = "x">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Running</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { profiles } from '@/models/profiles'
export default {
  props: {
    profile: Object,
  },
  data(){
    return {
      profiles,
    }
  },
}
</script>

<style>

</style>