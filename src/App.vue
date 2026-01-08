<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <div class="tabs">
      <button :class="{ active: activeTab === 'counter' }" @click="activeTab = 'counter'">
        计数器演示
      </button>
      <button :class="{ active: activeTab === 'typescript' }" @click="activeTab = 'typescript'">
        TypeScript 演示
      </button>
    </div>

    <div v-if="activeTab === 'counter'" class="tab-content">
      <HelloWorld :count="count" @increment="handleIncrement" />
      <p>当前计数： {{ count }}</p>
    </div>

    <div v-if="activeTab === 'typescript'" class="tab-content">
      <TypeDemo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TypeDemo from './components/TypeDemo.vue';

const title = import.meta.env.VITE_APP_TITLE || '前端工程化 Demo';
const count = ref(0);
const activeTab = ref<'counter' | 'typescript'>('counter');

const handleIncrement = () => {
  count.value++;
  console.log('Count:', count.value);
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.tabs button {
  padding: 10px 20px;
  border: 2px solid #42b983;
  background: white;
  color: #42b983;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.tabs button:hover {
  background: #f0f9f5;
}

.tabs button.active {
  background: #42b983;
  color: white;
}

.tab-content {
  margin-top: 20px;
}
</style>
