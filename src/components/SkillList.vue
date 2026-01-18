<script setup lang="ts">
// 这里的 items 是一个字符串数组
defineProps<{
  items: string[]; 
}>();
</script>

<template>
  <div class="skills-section">
    <h3>我的技能栈</h3>
    <ul>
      <li v-for="(skill, index) in items" :key="index">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.skills-section { margin-top: 30px; padding: 0 20px; }
h3 { border-bottom: 2px solid #42b883; display: inline-block; padding-bottom: 5px;}
ul { list-style: none; padding: 0; }
li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  border-left: 4px solid #42b883;
}
</style>