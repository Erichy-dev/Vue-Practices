<script setup lang="ts">
interface pp {
  name: { firstName?: string; secondName?: string };
  favoriteIDE: "VSCode" | "Atom";
  currentProgrammingLanguages?: string;
  levelOfExpertise: string;
  technologies?: string[];
  passion?: boolean;
}
const props = withDefaults(defineProps<pp>(), {
  levelOfExpertise: 'pro',
  favoriteIDE: 'VSCode'
});
</script>

<template>
  <div id="code-body">
    <h3>TIPS</h3>
    <ul class="a hint">
      <li>
        Type-based-declaration, <code>variable?: type</code> means the variable
        can be defined or undefined. To declare that it should be always defined
        use
        <code>variable: type</code>
        >
      </li>
      <li>
        Using <code>withDefaults()</code> outputs
        <label
          >"Default export of the module has or is using private name"</label
        >
        error and will also not work when defining the default values unless you
        explicitly import the Prop object in the required module.
      </li>
      <li>
        To provide varying data types use<code> age: [String, Number] </code>for
        <code>defineProps({})</code>. However, for
        <code> defineProps&#60;{}>()</code> use
        <code> age: string|number.</code>. Also, for
        <code>defineProps({variable: [value1, value2]})</code> instead inside
        <code>instance Props {}</code> use
        <code>variable: value1|value2</code>
      </li>
    </ul>
    <hr />
    <h3>MY ROUGH WORK</h3>
    <ul>
      <li v-bind="name">
        My name is {{ name.firstName }} {{ name.secondName }}
      </li>
      <li>my favorite IDE is {{ favoriteIDE }}<span></span></li>
      <li>I've exprience in {{ currentProgrammingLanguages }}</li>
      <li>I am a programming {{ levelOfExpertise }}</li>
      <li>
        List of my web-api technologies.
        <span class="hint"
          >Use string[] to describe an array type in the props</span
        >
        <ul v-for="technology in technologies" :key="technology">
          <li>{{ technology }}</li>
        </ul>
      </li>
      <li v-show="passion">
        I love software development
        <span class="hint">(Toggling this tag using a boolean)</span>
      </li>
    </ul>
  </div>
</template>
