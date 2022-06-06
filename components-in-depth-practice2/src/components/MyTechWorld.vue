<script setup lang="ts">
import { randomButtonColor } from "@/randomButtonColor";
import { ref } from "vue";

defineEmits<{
  (e: "change-color"): void;
  (e: "update:content", value: string): void;
}>();

//add defaults
interface Props {
  content: string;
  contentModifiers: object;
}
const props = withDefaults(defineProps<Props>(), {
  contentModifiers: () => {
    return {};
  },
})

function contentEventEmitter(e: any){
  // $emit('update:content')
  let deTarget = e.target;
  if (props.contentModifiers.changeFontColor) {
    let value = deTarget.value;
    randomButtonColor("color-me")
    emit("update:content", value);
  }
}
</script>

<template>
  <div>
    <ul class="a hint">
      <li>
        If you include a default event in emits such as click, Vue will render
        the custom click event rather than the default
      </li>
    </ul>
    <hr />
    <ul id="code-body">
      <li>
        <button id="color-me" @click="$emit('change-color')"></button
        ><span> Listening to a custom event to change color of button</span>
      </li>
      <li>
        <input
          type="text"
          :value="content"
          @input="contentEventEmitter"
        /><br />
        <span>
          I've another input in another component that's using v-model to output
          the contents of this input</span
        >
      </li>
    </ul>
  </div>
</template>
