<template>
<div style="margin-top: 15px">
<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Text input">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email input" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-right">
    <input class="input" type="password" placeholder="Password input">
  </div>
  
  <div class="control has-icons-right" style="margin-top: 15px">
    <input class="input" type="password" placeholder="Enter password again">
  </div>
</div>

<div class="field">
  <label class="label">Say something about yourself</label>
  <div class="control">
    <textarea class="textarea" placeholder="Text input"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    
</style>