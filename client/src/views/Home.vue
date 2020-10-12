<template>
  <div class="home" style="margin-top: 15px">
    <h1 class='title has-text-centered'>Hello Christopher!</h1>
      <div class='columns'>
        <div class='column is-two-thirds'>
          <Todo/>
        </div>
        <div class='column is-one-third'>
          <Friendactivity/>
        </div>
      </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
import Friendactivity from '@/components/Friendactivity.vue'
export default {
  name: 'Home',
  components: {
    Todo, Friendactivity,
  }
}
</script>
