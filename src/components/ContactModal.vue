<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <h2>Contact Us</h2>
      <form
        action="https://formspree.io/f/mgopqryw"
        method="POST"
      >
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="_replyto" required />
        </label>

        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
      <button class="close-btn" @click="close">✖</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => emit("close");
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
}
.modal h2 {
  margin-top: 0;
  color: black;
}
.modal form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal input,
.modal textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.modal button[type="submit"] {
  padding: 0.75rem;
  background: #222;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>