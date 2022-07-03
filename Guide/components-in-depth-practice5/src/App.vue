<script setup lang="ts">
import ProvideInjectVue from "./components/ProvideInject.vue";
import { ref, provide } from "vue"

const count = ref(23)
provide("key", count)
</script>

<template>
  <ProvideInjectVue />
</template>

<style>
</style>
