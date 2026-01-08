<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>计数器：{{ count }}</p>

    <button @click="increment">点击增加</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count: number;
}

defineProps<Props>();
const emit = defineEmits<{
  increment: [];
}>();

const msg = '欢迎使用 Vue 3 + TypeScript';

function increment() {
  emit('increment');
}
</script>

<style scoped>
.hello {
  padding: 20px;
  border: 1px solid #42b983;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 400px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #359268;
}
</style>
