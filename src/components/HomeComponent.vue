<template>
  <div class="home">
    <div class="text-section">
      <h1 class="home-text-top">See You in the <span class="gloom">Gloom</span></h1>
    </div>
    <div class="image-section">
          <img class="home-logo" src="/src/assets/logoSquare.png" alt="F3 Logo" />
    </div>
    <div class="text-section">
      <div class="scroll-indicator">
  <span>Scroll</span>
  <div class="arrow"></div>
</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.home {
  position: absolute;
  width: 100%;
  max-height: calc(100dvh - 60px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  padding: 2dvh;
  box-sizing: border-box;

}
.gloom {
  text-shadow: 0 0 10px rgba(255,255,255,0.4);
  animation: pulse 3s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    text-shadow: 0 0 10px rgba(255,255,255,0.4);
  }
  50% {
    text-shadow: 0 0 25px rgba(255,255,255,0.8);
  }
}
.home-text-top {
  font-size: clamp(32px, 8vw, 72px);
  color: white;
  line-height: clamp(32px, 6vw, 72px);
  font-weight: 400;
}
.scroll-indicator {
  text-align: center;
  opacity: 0.7;
    font-size: clamp(18px, 4vw, 36px);

  letter-spacing: 0.1em;
}

.arrow {
  width: clamp(16px, 4vw, 36px);
  height: clamp(16px, 4vw, 36px);
  margin: clamp(16px, 4vw, 36px) auto;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  animation: bounce 1.8s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(45deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(8px) rotate(45deg);
    opacity: 1;
  }
}
.text-section {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20dvh;
  flex-direction: column;
  margin: 0;
}
.image-section {
  height: clamp(200px, 50dvh, 600px);
  width: 100%;
}
.home-logo {
  width:100%;
  height: 100%;
  object-fit: contain;
 
}

</style>