<template>
  <div class="workout-scene">

    <h2 class="title-header">Workouts</h2>

    <div class="layout">

      <!-- MAP (SMALL FOCUSED VISUAL) -->
      <div class="map-panel">

        <div class="map-frame">

          <div class="map-image"></div>
          <div class="fog"></div>

          <!-- MARKERS -->
          <div
            v-for="(loc, key) in locations"
            :key="key"
            class="marker"
            :class="{ active: activeLocation === key }"
            :style="getPosition(loc)"
            @click="selectLocation(key)"
          >
            <div class="pulse"></div>
            <div class="dot"></div>
          </div>

        </div>
      </div>

      <!-- ALWAYS VISIBLE DETAILS -->
      <div class="details-panel">

        <!-- ICON + TITLE -->
        <div class="header">
          <i :class="locations[activeLocation].icon" class="icon"></i>

          <div>
            <h2 class="name">
              {{ locations[activeLocation].name }} - {{locations[activeLocation].type}}
            </h2>
            <p class="place">
              {{ locations[activeLocation].place }}
            </p>
          </div>
        </div>

        <!-- IMAGE SLOT -->
        <div class="photo">
          <img :src="locations[activeLocation].photo" />
        </div>

        <!-- SCHEDULE -->
        <ul class="schedule">
          <li
            v-for="(t, i) in locations[activeLocation].schedule"
            :key="i"
          >
            {{ t }}
          </li>
        </ul>

        <!-- ADDRESS -->
        <div class="address">
          📍 {{ locations[activeLocation].address }}
        </div>

        <!-- MAP LINK -->
        <a
          class="map-link"
          :href="locations[activeLocation].map"
          target="_blank"
        >
          Open in Google Maps →
        </a>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import warningImg from '/src/assets/warningtrack.png'
import sakImg from '/src/assets/swissarmyknife.png'
import madhouseImg from '/src/assets/madhouse.jpeg'

const activeLocation = ref('warning') // 🔥 ALWAYS DEFAULT ACTIVE


const locations = {
  warning: {
    name: 'Warning Track',
    place: 'Tolleson Park',
    icon: 'fas fa-baseball',
    type: 'Bootcamp',
      x: 20,
    y: 80,

    photo: warningImg,

    schedule: [
      'Tuesday – 5:45am–6:30am',
      'Thursday – 5:45am–6:30am',
      'Saturday – 6:30am–7:30am'
    ],

    address: '3515 McCauley Rd, Smyrna, GA',

    map: 'https://www.google.com/maps/search/?api=1&query=3590+King+Springs+Rd+SE+Smyrna+GA'
  },

  sak: {
    name: 'Swiss Army Knife',
    place: 'Jonquil Park',
    icon: 'fas fa-tools',
    type: 'Bootcamp',
     x: 86.5,
    y: 20,

    photo: sakImg,

    schedule: [
      'Monday – 5:45am–6:30am',
      'Wednesday – 5:45am–6:30am'
    ],

    address: '2411 Spring Rd SE, Smyrna, GA 30080',

    map: 'https://www.google.com/maps/search/?api=1&query=2411+Spring+Rd+SE+Smyrna+GA'
  },

  madhouse: {
    name: 'Madhouse',
    place: 'Taylor-Brawner Park',
    icon: 'fas fa-running',
    type: 'Run',
     x: 44.5,
    y: 55,

    photo: madhouseImg,

    schedule: [
      'Friday – 5:45am–6:15am'
    ],

    address: '3000 Park Road, Smyrna, GA',

    map: 'https://www.google.com/maps/search/?api=1&query=3180+Atlanta+Rd+SE+Smyrna+GA'
  }
}
function selectLocation(key) {
  activeLocation.value = key
}

function getPosition(loc) {
  return {
    left: loc.x + '%',
    top: loc.y + '%'
  }
}
</script>

<style scoped>.workout-scene {
  position: absolute;
  inset: 0;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  max-height: calc(100dvh - 60px);
  padding: 2dvh;
  box-sizing: border-box;

}

/* HEADER */
.title-header {
  text-align: center;
  margin: 16px 0;
  color: white;
  font-size: clamp(20px, 2vw, 72px);

}

/* =========================
   MAIN LAYOUT (NO BIG MAP)
========================= */

.layout {
  flex: 1;
  display: flex;
  gap: 24px;
  padding: 16px;
}

/* SMALL MAP PANEL */
.map-panel {
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* MAP FRAME (SMALL + CONTROLLED) */
.map-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
}

/* MAP IMAGE */
.map-image {
  position: absolute;
  inset: 0;

  background-image: url('/src/assets/map.png');

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  filter: grayscale(1) brightness(0.6);
}

/* FOG */
.fog {
  position: absolute;
  inset: 0;
  pointer-events: none;

  background:
    radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.9) 100%);
}

/* =========================
   MARKERS
========================= */

.marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;

  /* IMPORTANT: establish clean stacking center */
  width: 0;
  height: 0;
}

.marker.active {
  opacity: 1;
}

.pulse {
  position: absolute;
  left: 0;
  top: 0;

  transform: translate(-50%, -50%);

  width: 40px;
  height: 40px;

  background: rgba(255,255,255,0.2);
  border-radius: 50%;

  animation: pulse 2.5s infinite;
}

.dot {
  position: absolute;
  left: 0;
  top: 0;

  transform: translate(-50%, -50%);

  width: 10px;
  height: 10px;

  background: white;
  border-radius: 50%;
  box-shadow: 0 0 12px white;
}

/* =========================
   DETAILS (ALWAYS VISIBLE)
========================= */

.details-panel {
  flex: 1;
  background: rgba(10,10,10,0.95);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 2rem;
  margin-bottom: 8px;
  color: white;
    font-size: clamp(20px, 2vw, 72px);
    text-align: start;

}

.place {
  opacity: 0.8;
  text-align: start;

}

.map-link {
  margin-top: 16px;
  color: #ccc;
}



/* HEADER ROW */
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.icon {
  font-size: clamp(36px, 2vw, 72px);
  opacity: 0.9;
}

/* PHOTO */
.photo {
  width: 100%;
  height: 50dvh;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;

  background: #111;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

/* SCHEDULE */
.schedule {
  list-style: none;
  padding: 0;
  margin: 12px 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

.schedule li {
  margin-bottom: 6px;
}

/* ADDRESS */
.address {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 10px;
}

/* MAP LINK */
.map-link {
  display: inline-block;
  margin-top: 12px;
  color: #ccc;
  text-decoration: none;
}

.map-link:hover {
  color: white;
}
/* =========================
   ANIMATION
========================= */

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

@media (max-width: 725px) {

  /* HARD LOCK THE ENTIRE PAGE WIDTH */
  .workout-scene {
    overflow-x: hidden;
  }

  .layout {
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    flex-direction: start;

    /* IMPORTANT */
    width: 100%;
    box-sizing: border-box;
  }

  .title-header{
    margin-top: 2vh;
  }

  /* MAP FIX */
  .map-panel {
    flex:0;
    max-width: 100%;
    width: 100%;
    max-height: 40dvh;
  }

  .map-frame {
    width: 100%;
    max-width: 100%;
        max-height: 40dvh;

  }

  .details-panel {
    flex:0;
    width: 100%;
    max-width: 100%;
    max-height: 40dvh;
    box-sizing: border-box;
    padding: 2vw;
    justify-content: start;

    /* prevents long content from forcing expansion */
    overflow-wrap: break-word;
    word-break: break-word;
    flex:0;
  }

  /* IMAGE SAFETY */
  .photo {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .photo img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* ADDRESS SAFETY */
  .address {
    word-break: break-word;
    margin-top: 0;
  }

  .map-link {
    display: inline-block;
    max-width: 100%;
  }
  .photo {
    display:none;
  }
}



</style>


