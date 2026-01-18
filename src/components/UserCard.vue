<script setup lang="ts">
// 1. 定义 Props (相当于 C# 类的 Public 属性)
// 父组件通过这些属性把数据传进来
defineProps<{
  avatar: string;
  name: string;
  job: string;
  loading: boolean;
}>();

// 2. 定义 Emits (相当于 C# 的 Event / Delegate)
// 子组件通过这个触发事件，通知父组件
const emit = defineEmits<{
  (e: 'refresh-click'): void; // 定义一个叫 'refresh-click' 的事件
}>();

// 按钮点击处理函数
const onBtnClick = () => {
  // 触发事件，通知父组件干活
  emit('refresh-click');
};
</script>

<template>
  <div class="profile-card" :class="{ loading: loading }">
    <img :src="avatar" class="avatar" alt="用户头像" />
    <div class="info">
      <h1>{{ name }}</h1>
      <p class="job">{{ job }}</p>
      
      <button @click="onBtnClick" :disabled="loading">
        {{ loading ? '加载中...' : '换一个人' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 样式直接搬过来，scoped 保证只影响当前组件 */
.profile-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: opacity 0.3s;
  background: white;
}
.profile-card.loading { opacity: 0.7; }
.avatar { width: 100px; height: 100px; border-radius: 50%; border: 3px solid #42b883; }
h1 { margin: 0; font-size: 1.5rem; }
.job { color: #666; margin: 5px 0 15px 0; }
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
button:disabled { background-color: #ccc; }
</style>