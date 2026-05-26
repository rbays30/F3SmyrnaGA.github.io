<template>
  <div class="contact">
    <img class="logo-picture" src="/src/assets/logoSquare.png" alt="F3 Logo" />
    <div class="quote">
      <div class="quote-box">
        <h2 class="quote-text">Leave no man behind, but leave
          no man where you find him.</h2>
      </div>
      <div class="button-box">
         <a @click="openModal" target="_blank">
                  <button class="quote-button">Start Your Journey</button>
        </a>

      </div> 
      <div class="other-locs">
        <h2 class="contact-header">Not in Smyrna? Check out other Locations</h2>

        <div class="pill-container">
          <a
            v-for="location in locations"
            :key="location.name"
            class="pill"
            :href="location.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ location.name }}
          </a>
        </div>
      </div>
 
      <div class="other-locs">
        <h2 class="contact-header">Questions?</h2>
        <h3 class="contact-text">Contact f3smyrnaga@gmail.com</h3>
      </div>
  </div>

  </div>
</template>

<script setup lang="ts">
const locations = [
  { name: "F3 West Cobb", url: "http://f3westcobb.com/" },
  { name: "F3 Marietta", url: "https://www.f3marietta.com/" },
  { name: "F3 Alpharetta", url: "https://f3alpha.com/" },
  { name: "F3 Atlanta", url: "https://www.f3atlanta.com/"},
  {name: "F3 Nation", url: "https://f3nation.com/"}
];
const emit = defineEmits<{
  (e: "open-modal"): void;
}>();

const openModal = () => emit("open-modal");
</script>

<style scoped>
.contact {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding-left: 2vw;
  padding-right:2vw;
  max-height: calc(100dvh - 60px);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  line-height: 3rem;
  background: rgb(173, 12, 2);
  color: white;
  box-sizing: border-box;
  
}
.pill-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1dvh;
  max-width: 100vw;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem 1.2rem;
  border-radius: 999px;

  background-color: whitesmoke;
  color: black;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 6px;
}

.pill:hover {
  transform: translateY(-2px);
  box-shadow: black 0 4px 14px;
}

.other-locs {
  padding: 2dvh;
}

.quote-text {
  font-size: 3rem;
  color: white;
  font-style: italic;
  margin: 0;
  padding: 2dvh;
  max-width: 60%;
  display: flex;
  align-items: center;

}
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50dvh;
  text-align: center;
}
.quote-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  display: flex;
  text-decoration: none;
  
}

.quote-button {
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 100%;
  margin-top: 1dvh;
  margin-bottom: 1dvh;
  padding: 1rem;
  background-color: whitesmoke;
  
}
.button-box {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 2dvh;
}

.contact-header {
  font-size: 2rem;
  color: white;
}
.contact-text{
  font-size: 1.5rem;

}

.logo-picture{
  height: 50dvh;
  width: auto;
}

.quote-button:hover {
  box-shadow: black 0 1px 30px;
  transition-duration: .1s;
}

@media (max-width: 1600px) {
  .quote-button {
    padding: 0 2.6rem;
    font-size: clamp(1.5dvh,2dvh,5dvh);

  }
  .contact {
    flex-direction: column;
    justify-content: start;
  }
  .logo-picture {
    height: 25dvh;
    width: auto;
    margin: 1dvh;
  }
  .quote-text {
    font-size: clamp(1.5dvh,3dvh,5dvh);
    max-width:80vw;
    padding:1dvh;
  }
  .button-box {
    flex-direction: column;
    align-items: center;
    padding:1dvh;
  }

  .contact-header {
    font-size: clamp(1.5dvh,3dvh,5dvh);
    margin:0

  }

  .other-locs {
    padding:1dvh;
  }

  .contact-text {
    font-size: 1rem;
    margin:0;
  }

  .pill {
    font-size: clamp(12px, 1vw, 36px);
      padding: 0.1rem 0.75rem;

  }

}
</style>