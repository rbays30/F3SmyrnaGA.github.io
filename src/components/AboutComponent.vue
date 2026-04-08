<template>
  <div class="about">
    <!-- INTRO -->
    <div class="header">
      <h1>What is F3?</h1>
      <p>
        F3 is a national network of free, peer-led workouts for men.
        Our mission is to plant, grow and serve small workout groups for men
        for the invigoration of male community leadership.
      </p>
    </div>

    <!-- DESKTOP TITLE -->
    <div class="header hide-mobile">
      <h1>Fitness • Fellowship • Faith</h1>
    </div>


    <!-- DESKTOP: 3 CARDS -->
    <div class="row three-fs">
      <div class="card" v-for="(item, key) in fItems" :key="key">
        <i :class="item.icon"></i>
        <h2 class="content-title">{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </div>
    </div>

    <!-- MOBILE: TOGGLE -->
    <div class="mobile-fs">
      <div class="fs-tabs">
        <button
          v-for="(item, key) in fItems"
          :key="key"
          :class="{ active: activeF === key }"
          @click="activeF = key"
        >
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </button>
      </div>

      <div class="fs-content">
        <i :class="activeItem.icon"></i>
        <h2 class="content-title">{{ activeItem.title }}</h2>
        <p>{{ activeItem.text }}</p>
      </div>
    </div>

    <!-- PRINCIPLES -->
    <div class="header">
      <h1>Our Workouts...</h1>
    </div>

    <div class="row principles">
      <div class="pill"><i class="fas fa-dollar-sign"></i>Are Free of Charge</div>
      <div class="pill"><i class="fas fa-users"></i>Are Peer Led</div>
      <div class="pill"><i class="fas fa-sun"></i>Are Open to All Men</div>
      <div class="pill"><i class="fas fa-cloud-rain"></i>Are Outside, Rain or Shine</div>
      <div class="pill"><i class="fas fa-handshake"></i>End With A Circle of Trust</div>
    </div>
  </div>
  
</template>

<script setup>
import { ref, computed } from 'vue'

const activeF = ref('fellowship')

const fItems = {
  fitness: {
    icon: 'fas fa-dumbbell',
    title: 'Fitness',
    text: 'Open to all men. Workouts are scalable and push you.'
  },
  fellowship: {
    icon: 'fas fa-handshake',
    title: 'Fellowship',
    text: 'Build strong bonds through shared challenge.'
  },
  faith: {
    icon: 'fas fa-hands-praying',
    title: 'Faith',
    text: 'A belief in something bigger than yourself.'
  }
}

const activeItem = computed(() => fItems[activeF.value])
</script>
<style scoped>

.content-title {
  color: white;
}
.fs-tabs button {
  position: relative;
  z-index: 200;
}
.mobile-fs {
  position: relative;
  z-index: 100;
}

.about {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 4vw);
  height: 100%;
  background: white;
  color: black;

  display: flex;
  flex-direction: column;
  padding: 2vh;
  justify-content: space-evenly;
  overflow-y: auto;
}

/* HEADER */
.header {
  text-align: center;
  margin: 1vh 0;
}

.header h1 {
  font-size: clamp(1.2rem, 5vw, 3rem);
  margin: 5vh auto;
}

.header p {
  font-size: clamp(0.75rem, 2vh, 2rem);
  line-height: 1.6;
  max-width: 60vw;
  margin: 2vh auto;
}

/* ROW */
.row {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

/* CARDS */
.card {
  background: #1a1a1a;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card i {
  font-size: 2rem;
}

/* PRINCIPLES */
.principles {
  margin-top: 1rem;
  gap: 0.75rem;
}

.pill {
  background: #222;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
}

/* MOBILE TOGGLE (hidden by default) */
.mobile-fs {
  display: none;
}

/* MOBILE */
@media (max-width: 768px) {
  .about {
    padding: 2vw;
  }

  .header h1 {
    margin: 1vh auto;

  }

  .pill {
      font-size: clamp(1.5vh,1.5vh,3vh);

  }
  .header p {
    max-width: 90vw;
    margin: 1vh auto;

  }

  .principles {
    margin-top: 0;

  }

  .hide-mobile {
    display: none;
  }

  /* Hide desktop cards */
  .three-fs {
    display: none;
  }

  /* Show toggle */
  .mobile-fs {
    display: block;
  }

  .fs-tabs {
    display: flex;
    gap: 0.5rem;
  }

  .fs-tabs button {
    flex: 1;
    background: #222;
    color: white;
    border: none;
    border-radius: 999px;
    padding: 0.5rem;
    font-size: 0.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    transition: 0.2s;
  }

  .fs-tabs button.active {
    background: #444;
  }

  .fs-tabs button:active {
    transform: scale(0.95);
  }

  .fs-content {
    margin-top: 1rem;
    background: #1a1a1a;
    color: white;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    font-size: clamp(2vh,2vh,3vh);
  }

  .content-title{
        font-size: clamp(2vh,2vh,3vh);


  }

  .fs-content i {
    font-size: 1.8rem;
  }
}
</style>