<script setup lang="ts">
import api from "@/api";
import { ref, watchEffect } from "vue";

const items = ref([])
watchEffect(async () => {
  items.value = await api()
})
const newHero = ref("")
const poorHero = ref("")
const noHero = ref("")
const hError = ref(true)
function addHero(){
  if (!items.value.includes(newHero.value)){
    items.value.push(newHero.value)
  } else {
    clearError("Hero already exists")
  }
}
function demoteHero(){
  const index = items.value.indexOf(poorHero.value)
  if (items.value.includes(poorHero.value)) {
    items.value.splice(index, 1)
  } else {
    clearError("Select an available Hero")
  }
}
function clearError(str: string){
  hError.value = true;
  noHero.value = str
  setTimeout(() => {
    hError.value = !hError.value
  }, 3000);
}
</script>

<template>
  <div id="code-body">
    <button @click="addHero">Add your hero</button>&nbsp;<input
      type="textfield"
      style="width: 100px; height: 30px; border-radius: 2em;"
      placeholder="input name"
      v-model="newHero"
    />
    <br />
    <br />
    <button @click="demoteHero">Demote a Hero</button>&nbsp;<input
      type="textfield"
      style="width: 100px; height: 30px; border-radius: 2em;"
      placeholder="e.g. Ellon Musk"
      v-model="poorHero"
    />
    <br />
    <Transition name="list">
      <span v-if="hError">{{ noHero }}</span>
    </Transition>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">Cheers {{ item }}</li>
    </TransitionGroup>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
