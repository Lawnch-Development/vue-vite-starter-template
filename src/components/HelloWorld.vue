<template>
  <div>
    <p class="text-green-500 text-6xl font-semibold">Hello {{ string }}!</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const string = ref("World");
</script>
