<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import SquareComponentVue from "./SquareComponent.vue";

const numberOfSquares = ref([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// eslint-disable-next-line no-undef
let squares: HTMLCollectionOf<Element>;
let winner = ref("");
let GOAT = ref("");
let err = ref(false);

onMounted(() => {
  squares = document.getElementsByClassName("square")
})

function clearSquares(): void{
  for (let index = 0; index < squares.length; index++) {
    squares[index].innerHTML = "";
  }
  noev = false;
  winner.value = "";
  Xwinner.value = 0;
  Owinner.value = 0;
  GOAT.value = "";
  fillSquares(squares)
}

function childSpeaks(val: string, event: any): void{
  if (noev) {
    val === "X" ? Xwinner.value++ : Owinner.value++;
    currentSquare.value.push(event.target.id);
  }
}

watchEffect(() => {
  if (Xwinner.value > Owinner.value){
    winner.value = "X"
  } else if (Xwinner.value === Owinner.value) {
    winner.value = "None"
  } else {
    winner.value = "O";
  }
  if (Xwinner.value + Owinner.value === 9) {
    Xwinner.value > Owinner.value ? (GOAT.value = "X") : (GOAT.value = "O");
  }
})

function redoStep(){
  let currentId = currentSquare.value[currentSquare.value.length - 1]
  let element = document.getElementById(currentId)
  let someClicked = Xwinner.value + Owinner.value;
  if (element && someClicked > 0) {
    let previousVal: string = element.innerHTML;
    previousVal === "X" ? Xwinner.value-- : Owinner.value--;
    element.innerHTML = "";
    GOAT.value = "";
    currentSquare.value.splice(currentSquare.value.length - 1)
    fillSquares([element])
  } else {
    err.value = true;
    setTimeout(() => {
      err.value = false;
    }, 3000);
  }
}
</script>

<script lang="ts">
let noev = true;
let Xwinner = ref(0);
let Owinner = ref(0);
let currentSquare: any = ref([]);
function fillSquares(squares: any){
  for (let index = 0; index < squares.length; index++) {
    let elem = squares[index]

    elem.addEventListener("click", handleClick, { once: true });
  }
}

//just using name "elem" instead of "event"
let handleClick = (elem: any) => {
  let nullsOsX = ref(["X", "O"]);
  let index = ref(Math.floor(Math.random() * 2));
  let elemValue: string = nullsOsX.value[index.value];
  elemValue === "X" ? Xwinner.value++ : Owinner.value++;
  elem.target.innerHTML = elemValue;
  // id of current event target
  currentSquare.value.push(elem.target.id);
  elem.target.removeEventListener("click", handleClick)
}
</script>


<template>
  <main>
    <div class="status">
      <button style="margin-right: 0.5em">{{ winner }} Winning...</button>
      <button v-show="GOAT">{{ GOAT }} WINS!!!</button>
    </div>
    <div class="board-row" v-for="number of numberOfSquares" :key="number[0]">
      <SquareComponentVue
        v-for="num of number"
        :key="num"
        :id="num"
        @push-to-arr="childSpeaks"
      />
    </div>
    <button style="margin-right: 0.5em" @click="clearSquares">
      Clear Boxes
    </button>
    <button @click="redoStep">Redo Step</button>
    <div style="margin-top: 0.5em">
      <Transition name="err-button">
        <button v-if="err">please click a mystery box</button>
      </Transition>
    </div>
  </main>
</template>

<style>
.err-button-enter-active {
  transition: all 1s ease-out;
}
.err-button-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.err-button-enter-from,
.err-button-leave-to{
  transform: translateX(20px);
  opacity: 0;
}
</style>
