<script setup lang="ts">
const todo=useTodo()
function add()
{
    if(document.getElementById("a").value!="")
    {
    todo.value.push(document.getElementById("a").value);
    err.value=false;

    }
}
let err=ref(false);
let cor=ref(true);
function remove()
{
    if(todo.value.length!=0)
    {
    todo.value.pop();
    err.value=false;
    }
    else
    {
      console.log(todo.value.length);
      err.value=true;
    }
}

</script>
<template>
    <div >
        <ul v-for="txn in todo" >
        <li>{{ txn }}</li>
        </ul>    
    </div>
    Item:<input type="text" id="a"/>
    <button @click="add" class="button">Add</button>
    <button @click="remove" class="button1">Remove</button>
    <span v-bind:class="{Error:err,Correct:!err}">ToDo List Empty</span>
</template>
<style scoped>
.button{
  color: rgb(43, 226, 86);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  
}
.button1{
  color: rgb(226, 43, 61);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  
}
.Error
{
  color:rgb(128, 32, 0);
  font-family:cursive;
  display: block;

}
.Correct
{
  color:rgb(128, 32, 0);
  font-family:cursive;
  display:none;

}
</style>