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

// --- Virtual Scroll ---
const sceneNames = ["Join", "About", "Workouts", "Contact"];
const virtualScroll = ref(0);
let targetScroll = 0;

const scenes = [
  { name: "Join", ref: JoinRef, start: 0, end: 0, extra: { yMult: -0.1 } },
  { name: "About", ref: AboutRef, start: 100, end: 500 },
  { name: "Workouts", ref: midRef, start: 1000, end: 1300, extra: { scaleStart: 0.8, scaleEnd: 1 } },
  { name: "Contact", ref: ContactRef, start: 1600, end: 1800 },
];

function goToScene(index: number) {
  targetScroll = scenes[index].end;
}

function animateScene(scene: typeof scenes[number]) {
  const el = scene.ref.value?.$el;
  if (!el) return;

  let opacity: number;

  if (scene.start === 0) {
    opacity = 1 - virtualScroll.value / (scene.end || 1);
  } else {
    opacity = (virtualScroll.value - scene.start) / (scene.end - scene.start);
  }

  opacity = Math.max(0, Math.min(opacity, 1));

  const props: any = { opacity, duration: 0.3 };
  if (scene.extra?.yMult) props.y = virtualScroll.value * scene.extra.yMult;
  if (scene.extra?.scaleStart !== undefined) {
    const scale = scene.extra.scaleStart + opacity * (scene.extra.scaleEnd - scene.extra.scaleStart);
    props.scale = scale;
  }

  gsap.to(el, props);
  el.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
}

function setupVirtualScroll(maxScroll = 2000) {
  let startY = 0;

  const onWheel = (e: WheelEvent) => {
    targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY, maxScroll));
  };

  const onTouchStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
  const onTouchMove = (e: TouchEvent) => {
    const delta = startY - e.touches[0].clientY;
    targetScroll = Math.max(0, Math.min(targetScroll + delta, maxScroll));
    startY = e.touches[0].clientY;
  };

  window.addEventListener("wheel", onWheel);
  window.addEventListener("touchstart", onTouchStart);
  window.addEventListener("touchmove", onTouchMove);

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
  };
}

onMounted(() => {
  setupVirtualScroll();
  gsap.ticker.add(() => {
    virtualScroll.value += (targetScroll - virtualScroll.value) * 0.1;
    scenes.forEach(animateScene);
  });
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  touch-action: none;
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