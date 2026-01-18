<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">首页</RouterLink> | 
      <RouterLink to="/projects">项目经历</RouterLink>
    </nav>
  </header>

  <RouterView v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
</template>

<style scoped>
nav { padding: 20px; text-align: center; }
a { text-decoration: none; color: #42b883; font-weight: bold; }
a.router-link-active { color: #333; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>