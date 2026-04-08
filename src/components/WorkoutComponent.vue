<template>
  
  <div class="Workout">
    <h2 class="title-header">Workouts</h2>
    <div class="content">    
      <!-- DESKTOP: 3 CARDS -->
        <div class="desktop-cards">
          <div 
            class="card"
            v-for="(loc, key) in locations"
            :key="key"
          >
            <div class="card-top">
              <i :class="loc.icon"></i>
              <h2 class="card-name">{{ loc.name }}</h2>


            </div>

            <p class="place">{{ loc.place }}</p>

            <ul>
              <li v-for="(time, i) in loc.schedule" :key="i">
                {{ time }}
              </li>
            </ul>
            <p class="address">{{loc.address}}</p>

            <a :href="loc.map" target="_blank">📍 Open in Maps</a>
          </div>
        </div>

        <!-- MOBILE: SPOTLIGHT -->
        <div class="mobile-cards">
          <div
            v-for="(loc, key) in locations"
            :key="key"
            class="mobile-card"
            :class="{ active: activeLocation === key }"
            @click="activeLocation = key"
          >
            <div class="mobile-header">
              <i :class="loc.icon"></i>
              <h3>{{ loc.name }}</h3>
            </div>

            <div v-if="activeLocation === key" class="mobile-content">
              <p class="place">{{ loc.place }}</p>

              <ul>
                <li v-for="(time, i) in loc.schedule" :key="i">
                  {{ time }}
                </li>
              </ul>

              <a :href="loc.map" target="_blank">📍 Open in Maps</a>
            </div>
          </div>
        </div>
    </div>
        <h2 class="title-footer">Show Up Early - Look For the Group</h2>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeLocation = ref('warning')

const locations = {
  warning: {
    name: 'Warning Track',
    place: 'Tolleson Park',
    schedule: [
      'Tuesday – 5:45am–6:30am',
      'Thursday – 5:45am–6:30am',
      'Saturday – 6:30am–7:30am'
    ],
    icon: 'fas fa-running',
    address: '3590 King Springs Rd SE, Smyrna, GA 30080',
    map: 'https://www.google.com/maps/search/?api=1&query=33.86806,-84.521118'
  },
  sak: {
    name: 'Swiss Army Knife',
    place: 'Jonquil Park',
    schedule: [
      'Monday – 5:45am–6:30am',
      'Wednesday – 5:45am–6:30am'
    ],
    icon: 'fas fa-tools',
    address: '2411 Spring Rd SE, Smyrna, GA 30080',
    map: 'https://www.google.com/maps/search/?api=1&query=33.8835122,-84.4834571'
  },
  madhouse: {
    name: 'Madhouse',
    place: 'Taylor-Brawner Park',
    schedule: [
      'Friday – 5:45am–6:15am'
    ],
    icon: 'fas fa-fire',
    address: '3180 Atlanta Rd SE, Smyrna, GA 30080',
    map: 'https://www.google.com/maps/search/?api=1&query=33.876412,-84.507248'
  }
}
</script>

<style scoped>
.card-name {
  color: white;
  padding-top: 1vh;
}
.title-header {
  color: white;
  margin-top: 5vh;
  background-color: black;
  margin-bottom: 5vh;
  font-size: 2rem;
}
.title-footer {
  color: white;
  margin-top: 5vh;
  background-color: black;
  font-size: 1.5rem;
}
.address{
  font-size:1rem;
}
.Workout {
  position: absolute;
  width: calc(100% - 4vw);
  height: 100%;
  font-size: 3rem;
  background: black;
  color: white;
  padding-left: 2vw;
  padding-right:2vw;
  box-sizing: border-box;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;

}


/* DESKTOP */
.desktop-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  
}

.card {
  background: #1a1a1a;
  color: white;
  padding: 1.5rem;
  border-radius: 16px;
  width: 280px;
  position: relative;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card:hover {
  transform: translateY(-5px);
}

/* Top section */
.card-top {
  position: relative;
  text-align: center;
}

.card-top i:first-child {
  font-size: 2rem;
}



/* Text */
.place {
  margin: 0.5rem 0;
  font-weight: bold;
  line-height: 3rem;
  font-size: 2rem;
}

ul {
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
}

a {
  display: inline-block;
  margin-top: 0.5rem;
  color: #ccc;
  font-size: 0.9rem;
}

/* MOBILE */
.mobile-cards {
  display: none;
}

@media (max-width: 768px) {

  .desktop-cards {
    display: none;
  }

  .mobile-cards {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.rem;
  }

  .mobile-card {
    background: #222;
    color: white;
    border-radius: 12px;
    padding: 0.5rem;
    transition: 0.3s;
    width: 75vw;
  }

  .mobile-card.active {
    background: #1a1a1a;
  }

  .mobile-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(1.5vh,3vh,5vh);


  }

  .place {
        font-size: clamp(1.5vh,3vh,5vh);
          line-height: 2rem;


  }

  .mobile-content {
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  .title-header {
    margin: 0.8vh;
    font-size: clamp(1.5vh,4vh,5vh);

  }
}

</style>