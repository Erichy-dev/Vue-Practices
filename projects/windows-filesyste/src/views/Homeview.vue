<script setup lang="ts">
import { FolderIcon } from "@heroicons/vue/solid";

import fs from "fs"

const outerPath: string = dynamicOuterPath()
function dynamicOuterPath(): string {
  const pathString: string = process.cwd()
  const solution: string[] = pathString.split("\\")
  const numOfOuts: number = solution.length-1;
  let dynamicOuterPath: string = ""
  for (let i: number = 0; i < numOfOuts; i++) {
    dynamicOuterPath += "../";
  }
  return dynamicOuterPath;
}

let myFolders: string[] = fs.readdirSync(outerPath)
</script>
<template>
  <div>
    <FolderIcon class="folders" />
  </div>
</template>

<style>
.folders{
  height: 3rem;
  width: 3rem;
  color: burlywood;
}
</style>