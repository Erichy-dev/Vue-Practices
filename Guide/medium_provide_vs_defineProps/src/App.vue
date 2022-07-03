<script setup lang="ts">
import { provide, ref } from "vue";
import Props_vs_Provide from "./components/Props_vs_Provide.vue";
const myLanguage = ref();
const myIDE = ref("Visual Studio");
// Shortcut to all this
provide("myIDE", myIDE)
</script>

<template>
  <div id="parent">
    What's your favourite Programming Language?<br />
    <input type="text" id="favLanguage" v-model="myLanguage">
    <br />
    What's your favourite IDE?<br />
    <input type="text" id="favIDE" v-model="myIDE"/>
    <br />
    <Props_vs_Provide :programming-lang="myLanguage" />
  </div>
</template>

<style>
button {
  min-block-size: 3em;
  min-width: 3em;
  background-color: chocolate;
  border-style: inset;
  border-radius: 3em;
}
#parent {
  color: rgb(39, 44, 183);
  padding-top: 12em;
  padding-left: 20em;
}
</style>
