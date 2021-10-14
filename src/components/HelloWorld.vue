<template>
  <div>
    <p class="text-green-500 text-6xl font-semibold">
      Hello {{ props.string }}!
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ string: { type: String, default: "" } });
</script>
