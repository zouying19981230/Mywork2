<template>
  <div>
    <h2>home</h2>
    <router-link to="/home">主页</router-link>
    <br />
    <router-link to="/blog">博客</router-link>
    <br />
    <router-link to="/shop">商城</router-link>
    <br />
    <router-link to="/personal">个人中心</router-link>
    <br />
    <a href="https://www.baidu.com/">baidu</a>
    <!-- 外链用a标签，本页链接用<router-link> -->
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    routerInfo() {
      const { fullPath, path, title, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        title,
        params,
        query,
        meta
      };
    }
  }
};
</script>