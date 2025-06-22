<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSeoMeta } from '@vueuse/head'

useSeoMeta({
    title: 'imggion | Terminal Portfolio',
    ogImage: {
        url: '/img/og_bg.png',
        type: 'image/png'
    },
    twitterImage: {
        url: '/img/og_bg.png',
        type: 'image/png'
    }
})
</script>

<template>
    <RouterView />
</template>

<style>
/* Remove default body margins and ensure full height */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'JetBrains Mono', 'Courier New', 'Monaco', 'Menlo', monospace !important;
}

#app {
    height: 100vh;
    font-family: 'JetBrains Mono', 'Courier New', 'Monaco', 'Menlo', monospace !important;
}
</style>
