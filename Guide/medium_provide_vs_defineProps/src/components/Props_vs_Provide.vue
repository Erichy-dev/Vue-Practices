<script setup lang="ts">
import { inject, ref } from "vue";

// interface pp {
//   programmingLang: string;
//   IDE?: string;

// }
withDefaults(
  defineProps<{
    programmingLang: string;
    IDE?: string;
  }>(),
  {
    programmingLang: "Typescript",
  }
);

// The shortcut
const myIDE = inject("myIDE")
</script>
<template>
  <main id="child">
    <button>{{ programmingLang }}</button> &nbsp;
    <button>{{ myIDE }}</button>
  </main>
</template>

<style scoped>
main{
  margin: 2em;
}
</style>