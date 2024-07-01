<template>
  <section id="contact" class="contact">
    <h2>Contact</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div class="contact-info">
      <p>Location: Cape Town, South Africa</p>
      <div class="social-icons">
        <a href="https://github.com/NasheetaJacobs1999" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/nasheeta-jacobs-2b2196269/" target="_blank">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.form.name && this.form.email && this.form.message) {
        // Handle form submission
        alert('Form submitted successfully!');
        this.form = { name: '', email: '', message: '' };
      } else {
        alert('Please fill in all fields.');
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
}
form div {
  margin-bottom: 1rem;
}
.contact-info {
  margin-top: 2rem;
}
.social-icons a {
  margin-right: 1rem;
}
</style>
