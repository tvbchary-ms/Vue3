<script setup>
  import { ref } from "vue";
  const count = ref(0)
</script>

<template>
  <main>
    <div>
        <h1>JS Counter</h1>
       <h4> The current count is...</h4>
        <h1>{{count}}</h1>
        <button @click="count--">-</button>
        <button @click="count++">+</button>
    
  </div>
  </main>
</template>

<style >
  main{
    
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
}

div{
    text-align: center;
}

button{
    width: 100px;
    height: 40px;
    font-size: 25px;
    font-weight: bolder;
}

h1 {
    text-align: center;
    font-size: 40px;
}

h4{
    font-size: 25px;
    font-weight: 200;
}
</style>