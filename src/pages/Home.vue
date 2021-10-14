<template>
  <div class="page text-center flex justify-center items-center h-screen">
    <HelloWorld :string="string" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const string = ref("World");
</script>
