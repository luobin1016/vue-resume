<script setup lang="ts">
import { onMounted } from 'vue';
import UserCard from '@/components/UserCard.vue';
import SkillList from '@/components/SkillList.vue';

// 1. 引入刚才定义的 Store
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia'; // 这是一个辅助工具

// 2. 初始化 Store
const userStore = useUserStore();

// 3. 解构数据 (State)
// 注意：为了保持响应式，直接解构会丢失连接，所以要用 storeToRefs 包一下
const { fullName, avatarUrl, jobTitle, isLoading } = storeToRefs(userStore);

// 4. 解构方法 (Actions)
// 方法不需要 storeToRefs，直接解构即可
const { fetchUser } = userStore;

// 静态数据还是可以放本地
const mySkills = ["Vue 3 / Pinia", "TypeScript", "C# / .NET", "Linux"];

// 5. 初始化
onMounted(() => {
  fetchUser(); 
});
</script>

<template>
  <div class="home">
    <div class="resume-container">
      <Transition name="fade" mode="out-in">
        <UserCard 
          :key="fullName" 
          :name="fullName"
          :avatar="avatarUrl"
          :job="jobTitle"
          :loading="isLoading"
          @refresh-click="fetchUser"
        />
      </Transition>

      <SkillList :items="mySkills" />
    </div>
  </div>
</template>

<style scoped>
/* 样式不用动 */
.resume-container {
  max-width: 600px;
  margin: 40px auto;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
</style>