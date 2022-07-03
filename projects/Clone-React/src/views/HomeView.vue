<script setup lang="ts">
import GameComponentVue from "@/components/GameComponent.vue";
</script>


<template>
  <main>
    <div id="errors"></div>
    <game-component-vue />
  </main>
</template>

<style>
#errors {
  background: #c00;
  color: #fff;
  display: none;
  margin: -20px -20px 20px;
  padding: 20px;
  white-space: pre-wrap;
}
</style>
