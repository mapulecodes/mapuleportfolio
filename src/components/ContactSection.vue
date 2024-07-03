<template>
  <div class="contact-page">
    <h1 class="contact-title">Contact Me</h1>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="contact.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="contact.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="contact.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
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
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-container {
  width: 100%;
  max-width: 600px;
  background: #351f6b;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
  background-color: #0056b3;
}
</style>
