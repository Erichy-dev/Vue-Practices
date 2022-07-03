<script setup lang="ts">
import BoardComponentVue from "./BoardComponent.vue";
</script>
<template>
  <main>
    <div class="game">
      <div class="game-board">
        <BoardComponentVue />
      </div>
      <div class="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
  </main>
</template>