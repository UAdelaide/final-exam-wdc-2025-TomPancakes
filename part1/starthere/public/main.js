
const { createApp } = Vue;

    createApp({
      data() {
        return {
          dogImage: ''
        }
      },
      methods: {
        async fetchNewDog() {
          try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            this.dogImage = data.message;
          } catch {
            alert('Failed to load dog image');
          }
        }
      },
      mounted() {
        this.fetchNewDog();
      }
    }).mount('#app');
