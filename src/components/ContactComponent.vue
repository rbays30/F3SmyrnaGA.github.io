<template>
  <div class="contact">
    <img class="logo-picture" src="/src/assets/logo.png" alt="F3 Logo" />
    <div class="quote">
      <div class="quote-box">
        <h2 class="quote-text">Leave no man behind, but leave
          no man where you find him.</h2>
      </div>
      <div class="button-box">
        <a href="https://f3nation.com/" >
          <button class="quote-button" href="www.f3nation.com">Check out F3 Nation</button>
        </a>
         <a href="https://f3atlanta.com/" >
          <button class="quote-button" href="www.f3nation.com">Check out F3 Atlanta</button>
        </a>
         <a @click="openModal" target="_blank">
                  <button class="quote-button">Start Your Journey</button>

        </a>

      </div>      
      <div>
        <h2 class="contact-header">Questions?</h2>
        <h3 class="contact-text">Contact f3smyrnaga@gmail.com</h3>
      </div>
  </div>

  </div>
</template>

<script setup lang="ts">
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
  width: calc(100% - 4vw);
  padding-left: 2vw;
  padding-right:2vw;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  line-height: 3rem;
  background: rgb(173, 12, 2);
  color: white;
  box-sizing: border-box;
  
}
.quote-text {
  font-size: 3rem;
  color: white;
  font-style: italic;
  padding: 1vh;
  max-width: 60%;
  display: flex;
  align-items: center;

}
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
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
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding: 1rem;
  background-color: whitesmoke;
  
}
.button-box {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.contact-header {
  font-size: 2rem;
  color: white;
}
.contact-text{
  font-size: 1.5rem;

}

.logo-picture{
  height: 50vh;
  width: auto;
}

.quote-button:hover {
  box-shadow: black 0 1px 30px;
  transition-duration: .1s;
}

@media (max-width: 768px) {
  .quote-button {
    padding: 0 2.6rem;
    font-size: clamp(1.5vh,2vh,5vh);

  }
  .contact {
    flex-direction: column;
    justify-content: start;
  }
  .logo-picture {
    height: 25vh;
    width: auto;
    margin: 1vh;
  }
  .quote-text {
    font-size: clamp(1.5vh,3vh,5vh);
    max-width:80vw;
  }
  .button-box {
    flex-direction: column;
    align-items: center;
  }

  .contact-header {
    font-size: clamp(1.5vh,3vh,5vh);
    margin: 1vh;

  }

  .contact-text {
    font-size: 1rem;
  }

}
</style>