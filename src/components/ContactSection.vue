<template>
  <div class="contact-page">
    <h1 class="contact-title">Contact Me</h1>
    <div class="content-container">
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="contact.name" required />
            <hr>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="contact.email" required />
            <hr>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="contact.message" required></textarea>
            <hr>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="image-container">
        <img src="https://mapulecodes.github.io/fridayimages/images/contact.png" alt="Contact Image" />
        <div class="social-icons">
          <a href="https://github.com/yourusername" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.contact.name || !this.contact.email || !this.contact.message) {
        await Swal.fire({
          icon: 'error',
          title: 'Incomplete Form',
          text: 'Please fill in all fields.',
          background: '#ffcccc',
          color: '#333',
        });
        return;
      }

      await Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Thank you for your message!',
        background: '#ccffcc',
        color: '#333',
      });

      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
    },
  },
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #001F4D, #666e7a, #554671, #3f1d5a);
  height: 100vh;
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.form-container {
  width: 45%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: white;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #503799;
}

.image-container {
  width: 45%;
  position: relative;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
}

.social-icons {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.social-icons a {
  color: white;
  font-size: 2rem;
  margin: 0 10px;
}
</style>
