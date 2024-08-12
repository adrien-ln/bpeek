<template>
    <div>
        <section>
            <h1>Bienvenue sur Baguette Peek</h1>
            <p>Toute l'actualité de la scène française de Counter-Strike.</p>
            <h1>Upcoming Matches</h1>
            <MatchList />
        </section>
    </div>
</template>
  
<style scoped>
    section {
        padding: 2rem;
        text-align: center;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.25rem;
    }
</style>

<script setup>
// Aucun import nécessaire si Nuxt 3 gère automatiquement les composants
</script>
  