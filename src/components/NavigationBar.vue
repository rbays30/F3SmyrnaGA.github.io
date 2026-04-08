<template>
  <nav class="nav-bar">
    <div class="nav-left">
      <img src="/src/assets/logo.png" alt="Logo" class="nav-logo" />
      <h1 class="nav-header">Smyrna F3</h1>
    </div>

    <!-- Desktop Links -->
    <div class="nav-links desktop-only">
      <button
        v-for="(scene, i) in scenes"
        :key="i"
        @click="goToScene(i)"
      >
        {{ scene }}
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <div class="mobile-only hamburger-wrapper" @click="toggleMenu">
      <div :class="['hamburger', { open: menuOpen }]">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="menuOpen" class="mobile-menu mobile-only">
      <button
        v-for="(scene, i) in scenes"
        :key="i"
        @click="goToScene(i); menuOpen = false"
      >
        {{ scene }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  scenes: {
    type: Array,
    required: true,
  },
  scrollToScene: {
    type: Function,
    required: true,
  },
});

function goToScene(index) {
  props.scrollToScene(index);
}

const menuOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* <-- align left */
  background: black;
  padding: 0 20px;
  z-index: 1000;
}

/* Left section: logo + title */
.nav-left {
  display: flex;
  align-items: center;
}

.nav-logo {
  height: 40px;
  margin-right: 10px;
}

.nav-header {
  font-size: 1.2rem;
  color: white;
  margin: 0;
}

/* Desktop nav links */
.nav-links {
  display: flex;
  margin-left: 20px; /* gap from logo/title */
}

.nav-links button {
  margin-left: 10px;
  padding: 8px 16px;
  color: white;
  background: #1f2937;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.nav-links button:hover {
  background: #4b5563;
}

/* Mobile hamburger */
.mobile-only {
  display: none;
}

.hamburger-wrapper {
  margin-right: 30px; /* push to right */
  margin-left:auto;
  cursor: pointer;
  align-items: start;
}

.hamburger {
  width: 25px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile dropdown menu */
.mobile-menu {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%; /* full width so it isn't cut off */
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.mobile-menu button {
  padding: 15px 20px; /* add side padding so not cut off */
  color: white;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

.mobile-menu button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive rules */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
}
</style>