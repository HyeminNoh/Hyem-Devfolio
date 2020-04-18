<template>
  <b-navbar toggleable="md" id="menu" fixed="top">
    <b-navbar-brand
      class="mb-0"
      href="#home"
      style="color: #438945; font-weight:bold; font-size: 1.8em"
    >Hyem's Devfolio</b-navbar-brand>
    <b-navbar-toggle id="nav-toggle" target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#home"><p class="item">Home</p></b-nav-item>
        <b-nav-item href="#skills"><p class="item">Skills</p></b-nav-item>
        <b-nav-item href="#projects"><p class="item">Projects</p></b-nav-item>
        <b-nav-item href="#open-source"><p class="item">Open-Source</p></b-nav-item>
        <b-nav-item href="https://github.com/HyeminNoh" target="_blank"><img :src="github" alt="github" style="width: 2em"></b-nav-item>
        <b-nav-item href="http://hyem-study.tistory.com/" target="_blank"><img :src="tistory" alt="tistory" style="width: 2em"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    tistory () { return require('@/assets/tistory-logo-fill.svg') },
    github () { return require('@/assets/github-brands.svg') },
  }
};
</script>
<style lang="css">
#menu {
  padding-left: 5%;
  padding-right: 5%;
  background-color: #F7F4E9;
}
#nav-collapse {
  text-align: right;
}
#nav-toggle{
  background-color: #C6AD8F;
}
.item {
  color: #1d1d2c;
  font-size: 1.2em;
  font-weight: bold;
}
.item:hover {
  outline: none;
  color: #eba63f;
  font-weight: bold;
}
</style>
