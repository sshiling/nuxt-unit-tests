<template>
    <h1>
        Home Page
    </h1>
    <button
        data-testid="about-button"
        @click="goToAbout()"
    >
        Go to the About page
    </button>
</template>

<script setup lang="ts">
    const router = useRouter();

    function goToAbout() {
        router.push('/about')
    }
</script>
