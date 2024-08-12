<script setup>
    import Header from '../components/common/Header.vue';
</script>

<template>
    <div>
      <Header />
        <section>
            <NuxtPage />
        </section>
    </div>
</template>
  
  <style scoped>
  section {
    padding: 2rem;
  }
  </style>
  