<template>
    <h1>
        About Page
    </h1>
    <button @click="goToHome()">
        Go to the Home page
    </button>
</template>

<script setup lang="ts">
    async function goToHome() {
        await navigateTo('/')
    }
</script>
