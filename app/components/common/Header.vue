<!-- components/Header.vue -->
<template>
    <header>
        <NuxtLink to="/">
            <!-- <img src="favicon.ico" alt="Logo" /> -->
        </NuxtLink>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Acceuil</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/matchs">Matchs</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/results">Résultats</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/news">Actualités</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/teams">Équipes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/players">Joueurs</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/ranking">Classement</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">À propos</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #333;
    padding: 1rem;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>
