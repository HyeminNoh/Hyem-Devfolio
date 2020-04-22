<template>
  <div id="app">
    <Header></Header>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <OpenSource></OpenSource>
    </full-page>
    <ul class="footer">
      <li ><img class ="float-right" id="home-btn" @click="$refs.fullpage.api.moveTo(1,1)" :src="`${publicPath}arrow-top.png`"></li>
    </ul>
  </div>
</template>

<script>
import FullPage from 'vue-fullpage.js/src/FullPage'
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Skills from './components/Skill.vue';
import Projects from './components/Project.vue';
import OpenSource from './components/OpenSource.vue';

export default {
  name: "App",
  components: {
    Header,
    Home,
    Skills,
    Projects,
    OpenSource,
    FullPage
  },
  data: function() {
    return {
      publicPath: process.env.BASE_URL,
      options: {
        paddingTop: "5%",
        paddingBottom: "10%",
        anchors: ["home", "skills", "projects", "open-source"],
        sectionsColor: ["#F7F4E9", "#F7F4E9", "#F7F4E9", "#F7F4E9"],
        scrollOverflow: true,
      }
    };
  }
};
</script>

<style src="./main.css"></style>