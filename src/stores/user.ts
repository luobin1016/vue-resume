import { defineStore } from 'pinia'
import { ref } from 'vue'

// defineStore 第一个参数 'user' 是唯一 ID
export const useUserStore = defineStore('user', () => {
  
  // --- State (状态) ---
  // 相当于 C# 类的属性
  const fullName = ref("请登录");
  const avatarUrl = ref("https://via.placeholder.com/150");
  const jobTitle = ref("访客");
  const isLoading = ref(false);

  // --- Actions (动作) ---
  // 相当于 C# 类的方法
  const fetchUser = async () => {
    // 优化：如果已经有数据了，就别浪费流量重新请求了 (可选逻辑)
    if (fullName.value !== "请登录" && fullName.value !== "加载失败") {
       console.log("使用缓存数据，无需请求");
       return; 
    }

    isLoading.value = true;
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const user = data.results[0];
      
      fullName.value = `${user.name.first} ${user.name.last}`;
      avatarUrl.value = user.picture.large;
      jobTitle.value = "全栈开发工程师"; // 假装这是 API 返回的
    } catch (e) {
      fullName.value = "加载失败";
    } finally {
      isLoading.value = false;
    }
  };

  // 必须把想暴露给组件用的东西 return 出去
  return { fullName, avatarUrl, jobTitle, isLoading, fetchUser }
})