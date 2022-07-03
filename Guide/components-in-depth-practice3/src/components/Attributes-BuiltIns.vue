<script setup lang="ts">
import { ref, useAttrs } from "vue";

const myattrs = useAttrs();

//Toggle Content
const show = ref(true);
function showMe() {
  show.value = !show.value;
}

//Terrible Bouncer
const TerribleB = ref(true);
function TB() {
  TerribleB.value = !TerribleB.value;
}

//Expose My Intestines
const ExposeDem = ref(true);
function EMI() {
  ExposeDem.value = !ExposeDem.value;
}

//Shuffle Traits
const weirdTraits = ["genius", "great", "cool", "exotic"];
const trait = ref("");
function ST() {
  let position = Math.floor(Math.random() * 4);
  trait.value = weirdTraits[position];
}
</script>

<template>
  <div id="code-body">
    <div>
      <button @click="showMe">Toggle Content</button>
    </div>
    <transition name="slide-fade">
      <div v-if="show">
        <ul class="a hint">
          <li>
            use
            <code>useAttrs()</code>
            to access the inherited attributes
          </li>
          <li>
            Avoid using inline statements for events. They've some weird bugs
          </li>
          <li>
            Tried moving 2 elements to the same div but Transition still chooses
            to work with one of the elements and ignore the other
          </li>
          <li>
            When applying both animation & transition you should explicitly tell Vue which to handle e.g. <code>type="animation"</code>
          </li>
          <li>
            To transition inner elements you must include<code> duration </code> attribute on the Transition element.
          </li>
        </ul>
      </div>
    </transition>
    <hr />
    <button @click="TB">Terrible Bouncer</button>
    <transition name="bounce">
      <div
        v-if="TerribleB"
        class="attrsShow"
        enter-from-class="animate_me_when_coming"
      >
        Hello meet my {{ myattrs["class"] }}
      </div>
    </transition>
    <br />
    <button @click="EMI">Expose My Intestines</button>
    <transition name="nested" appear :duration="{ enter: 3000, leave: 4000 }">
      <div v-if="ExposeDem" class="stomach">
        <div class="intestines">
          My Intestines are GODLY yoh! Put Some Respect on THEM!
        </div>
      </div>
    </transition>
    <br />
    <button @click="ST">Shuffle Traits</button>
    <br />
    <span>Surprise Surprise The mighty gods have considered you ...</span>
    <transition mode="out-in" name="bounce">
      <button v-if="trait == 'moron'">Moron</button>
      <button v-else-if="trait == 'cool'">Cool</button>
      <button v-else-if="trait == 'psycho'">Psycho</button>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: opacity 4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.stomach {
  background-color: rgb(231, 79, 79);
  padding: 1em;
}
.intestines {
  background-color: rgb(243, 32, 32);
}
.nested-enter-active .intestines {
  transition-delay: 1s;
}
.nested-enter-active .intestines,
.nested-leave-active .intestines {
  transition: all 2s ease-in-out;
}

.nested-enter-from .intestines,
.nested-leave-to .intestines {
  transform: translateX(30px);
  opacity: 0;
}
</style>
