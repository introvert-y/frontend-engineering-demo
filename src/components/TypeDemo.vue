<template>
  <div class="type-demo">
    <h2>TypeScript 工具类型演示</h2>

    <div class="demo-section">
      <h3>1. 用户信息（Pick 类型）</h3>
      <div class="user-card">
        <p><strong>ID:</strong> {{ userBasicInfo.id }}</p>
        <p><strong>姓名:</strong> {{ userBasicInfo.name }}</p>
        <p><strong>邮箱:</strong> {{ userBasicInfo.email }}</p>
      </div>
    </div>

    <div class="demo-section">
      <h3>2. 工具函数演示</h3>
      <button @click="handleDebounceClick">防抖按钮 (1秒)</button>
      <p>点击次数: {{ clickCount }}</p>

      <button @click="testArrayHelpers">测试数组工具</button>
      <p v-if="arrayResult">{{ arrayResult }}</p>
    </div>

    <div class="demo-section">
      <h3>3. 类型守卫演示</h3>
      <button @click="testTypeGuards">测试类型守卫</button>
      <div v-if="typeGuardResult" class="result-box">
        <pre>{{ typeGuardResult }}</pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>4. API 响应类型演示</h3>
      <button @click="fetchUserData">模拟获取用户数据</button>
      <div v-if="apiStatus === 'loading'" class="loading">加载中...</div>
      <div v-if="apiStatus === 'success' && userData" class="success">
        <p>✅ 获取成功</p>
        <p>用户: {{ getUserDisplayName(userData) }}</p>
        <p>角色: {{ userData.role }}</p>
      </div>
      <div v-if="apiStatus === 'error'" class="error">❌ 获取失败</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { User, UserBasicInfo, ApiResponse, Status } from '@/types';
import {
  debounce,
  first,
  last,
  unique,
  isNil,
  isString,
  isNumber,
  getUserDisplayName,
  isAdmin,
  delay,
} from '@/utils/typeHelpers';

// ==================== 用户信息演示 ====================

// 使用 Pick 类型提取用户基本信息
const userBasicInfo = reactive<UserBasicInfo>({
  id: 1,
  name: '张三',
  email: 'zhangsan@example.com',
});

// ==================== 防抖演示 ====================

const clickCount = ref(0);

// 防抖函数：1秒内多次点击只执行一次
const debouncedIncrement = debounce(() => {
  clickCount.value++;
}, 1000);

const handleDebounceClick = () => {
  debouncedIncrement();
};

// ==================== 数组工具演示 ====================

const arrayResult = ref('');

const testArrayHelpers = () => {
  const numbers = [1, 2, 3, 4, 5, 2, 3, 1];
  const uniqueNumbers = unique(numbers);
  const firstNum = first(numbers);
  const lastNum = last(numbers);

  arrayResult.value = `
原数组: [${numbers.join(', ')}]
去重后: [${uniqueNumbers.join(', ')}]
第一个元素: ${firstNum}
最后一个元素: ${lastNum}
  `.trim();
};

// ==================== 类型守卫演示 ====================

const typeGuardResult = ref('');

const testTypeGuards = () => {
  const testValues = [null, undefined, 'hello', 42, true, []];

  const results = testValues.map(value => {
    const checks = {
      value: String(value),
      isNil: isNil(value),
      isString: isString(value),
      isNumber: isNumber(value),
    };
    return checks;
  });

  typeGuardResult.value = JSON.stringify(results, null, 2);
};

// ==================== API 响应演示 ====================

const apiStatus = ref<Status>('idle');
const userData = ref<User | null>(null);

const fetchUserData = async () => {
  apiStatus.value = 'loading';
  userData.value = null;

  // 模拟 API 请求
  await delay(1500);

  // 模拟成功响应
  const mockResponse: ApiResponse<User> = {
    code: 200,
    message: '成功',
    data: {
      id: 1,
      name: '李四',
      email: 'lisi@example.com',
      age: 28,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    timestamp: Date.now(),
  };

  if (mockResponse.code === 200) {
    apiStatus.value = 'success';
    userData.value = mockResponse.data;
    console.log('是否为管理员:', isAdmin(userData.value));
  } else {
    apiStatus.value = 'error';
  }
};
</script>

<style scoped>
.type-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #42b983;
  margin-bottom: 30px;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.demo-section h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 18px;
}

.user-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #42b983;
}

.user-card p {
  margin: 8px 0;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #359268;
}

.result-box {
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
  overflow-x: auto;
}

.result-box pre {
  margin: 0;
  font-size: 12px;
  color: #2c3e50;
}

.loading,
.success,
.error {
  margin-top: 15px;
  padding: 12px;
  border-radius: 6px;
}

.loading {
  background-color: #fff3cd;
  color: #856404;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}

.success p,
.error p {
  margin: 5px 0;
}
</style>
