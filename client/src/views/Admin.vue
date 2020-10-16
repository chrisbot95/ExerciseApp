<template>
<div>
      <aside class="menu">
  <p class="menu-label">
    Users
  </p>
  <ul class="menu-list">
    
    <li>
    <a>
      <span class="icon is-small is-left" >
      <i class="fas fa-user" ></i>
    </span>  Chris
    <button>Edit</button>
    <button>Delete</button>
    <nav class="panel">
  <p class="panel-heading">
    Exercises
  </p>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Running
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Walking
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Swimming
  </a>
</nav>
    </a>
    </li>
  </ul>
</aside>

<nav class="panel">
  <p class="panel-heading">
    Exercise Types
  </p>
  <div class="panel-block">
    
  </div>
  
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Running
    <button>Edit</button>
    <button>Delete</button>
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Walking
    <button>Edit</button>
    <button>Delete</button>
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Swimming
    <button>Edit</button>
    <button>Delete</button>
  </a>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Add more exercises
    </button>
  </div>
</nav>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>