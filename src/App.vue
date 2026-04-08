<template>
  <NavigationBar :scenes="sceneNames" :scrollToScene="goToScene" />

  <div class="scene-container">
    <JoinComponent ref="JoinRef" class="interactive" @open-modal="openModal" />
    <AboutComponent ref="AboutRef" class="interactive" />
    <WorkoutComponent ref="midRef" class="interactive" />
    <ContactComponent ref="ContactRef" class="interactive" @open-modal="openModal" />
  </div>

  <ContactModal v-if="showModal" @close="closeModal" />
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

import NavigationBar from "./components/NavigationBar.vue";
import JoinComponent from "./components/JoinComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import WorkoutComponent from "./components/WorkoutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import ContactModal from "./components/ContactModal.vue";

// --- Scene Refs ---
const JoinRef = ref<InstanceType<typeof JoinComponent> | null>(null);
const AboutRef = ref<InstanceType<typeof AboutComponent> | null>(null);
const midRef = ref<InstanceType<typeof WorkoutComponent> | null>(null);
const ContactRef = ref<InstanceType<typeof ContactComponent> | null>(null);

// --- Modal ---
const showModal = ref(false);
const openModal = () => (showModal.value = true);
const closeModal = () => (showModal.value = false);

// --- Scene Config ---
const sceneNames = ["Join", "About", "Workouts", "Contact"];
const scenes = [
  { name: "Join", ref: JoinRef },
  { name: "About", ref: AboutRef },
  { name: "Workouts", ref: midRef },
  { name: "Contact", ref: ContactRef },
];

let currentPage = 0;   // currently visible page (can be fractional for smooth animation)
let targetPage = 0;    // page we’re snapping toward

// --- Navigation ---
function goToScene(index: number) {
  targetPage = Math.max(0, Math.min(index, scenes.length - 1));
}

// --- Animate Scenes ---
function animateScenes() {
  scenes.forEach((scene, index) => {
    const el = scene.ref.value?.$el;
    if (!el) return;

    const isActive = Math.round(currentPage) === index;

    gsap.to(el, {
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 50,          // optional slight slide for effect
      duration: 0.3,
      pointerEvents: isActive ? "auto" : "none",
      overwrite: "auto",
    });
  });
}

// --- Scroll / Swipe Handling ---
function setupPageSnap() {
  let startY = 0;

  // Mouse wheel → snap pages
  const onWheel = (e: WheelEvent) => {
    if (e.deltaY > 30 && targetPage < scenes.length - 1) targetPage++;
    else if (e.deltaY < -30 && targetPage > 0) targetPage--;
  };

  // Touch swipe → snap pages
  const onTouchStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
  const onTouchEnd = (e: TouchEvent) => {
    const delta = startY - e.changedTouches[0].clientY;
    if (delta > 30 && targetPage < scenes.length - 1) targetPage++;
    else if (delta < -30 && targetPage > 0) targetPage--;
  };

  window.addEventListener("wheel", onWheel);
  window.addEventListener("touchstart", onTouchStart);
  window.addEventListener("touchend", onTouchEnd);

  // --- Resize / fullscreen fixes ---
  const onResize = () => {
    scenes.forEach((scene) => {
      if (scene.ref.value?.$el) {
        scene.ref.value.$el.style.width = `${window.innerWidth}px`;
        scene.ref.value.$el.style.height = `${window.innerHeight}px`;
      }
    });
  };
  window.addEventListener("resize", onResize);
  onResize();
}

// --- Mounted ---
onMounted(() => {
  setupPageSnap();

  gsap.ticker.add(() => {
    // Smoothly animate currentPage toward targetPage
    currentPage += (targetPage - currentPage) * 0.2;
    animateScenes();
  });
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* allow zooming */
  touch-action: pan-y pinch-zoom;
  overflow-x: hidden;
}

.scene-container {
  position: fixed;
  width: 100%;
  height: calc(100vh - 60px);
  top: 60px;
  left: 0;
  pointer-events: none;
}

.interactive {
  pointer-events: auto;
}
</style>