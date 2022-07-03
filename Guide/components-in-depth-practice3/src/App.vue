<script setup lang="ts">
import AttributesBuiltIns from "./components/Attributes-BuiltIns.vue";

</script>

<template>
  <AttributesBuiltIns class="pero" />
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
h3 {
  font-weight: 700;
}
#code-body {
  background-color: rgb(243, 247, 250);
}
code {
  background-color: rgb(243, 243, 183);
}
.hint {
  background-color: rgb(248, 250, 240);
  font-family: cursive;
}
label {
  color: rgb(173, 110, 110);
}
ul.a {
  list-style-type: georgian;
}
button {
  min-block-size: 3em;
  min-width: 3em;
  background-color: chocolate;
  border-style: inset;
  border-radius: 3em;
}
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
