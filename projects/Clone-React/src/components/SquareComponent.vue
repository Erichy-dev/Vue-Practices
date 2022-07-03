<script setup lang="ts">
import { ref } from "vue";

let emit = defineEmits(["pushToArr"])

let clickedValue = ref();
function playValue(event: any): void{
  let nullsOsX = ref(["X", "O"]);
  let index = ref(Math.floor(Math.random() * 2));
  clickedValue.value = nullsOsX.value[index.value]
  emit("pushToArr", clickedValue.value, event)
}

</script>

<template>
  <button class="square" @click.once="playValue">
    {{ clickedValue }}
  </button>
</template>
