<template>
  <div class="join">
    <h1 class="join-text-top">Join the Gloom</h1>
    <img class="join-logo" src="/src/assets/F3.webp" alt="F3 Logo" />
    <button class="join-button" @click="openModal">Join Our Slack Channel</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "open-modal"): void;
}>();

const openModal = () => emit("open-modal");
</script>

<style scoped>
.join {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
}
.join-text-top {
  font-size: 5vh;
  margin: 7vh 0;
  color: white;
}
.join-logo {
  width: 25vw;
  height: auto;
  filter: invert(1);
}
.join-button {
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 7vh;
  background-color: whitesmoke;
}

.join-button:hover {
  box-shadow: white 0 1px 30px;
  transition-duration: .1s;

}
</style>