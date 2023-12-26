<script setup lang="ts">

const counter = useCounter()

</script>
<template>
  
<div>
    Counter: {{ counter }}
    <button @click="counter++" class="button1">
      Increment
    </button>
    <button @click="counter--" class="button1">
      Decrement
    </button>
  </div>
 </template>
<style type="scoped">
.button1{
  color: rgb(86, 43, 226);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
  
</style> 