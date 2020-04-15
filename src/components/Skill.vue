<template>
  <div class="section">
    <div class="content">
      <p class="content-header">🌱 Skills</p>
      <hr>
      <b-row>
        <b-col md="5">
          <ul class="skill-icons">
            <li v-for="(item, index) in icons" :key="index" class="icon-inline">
              <font-awesome-icon class="dev-icon" :icon="item" size="6x"/>
            </li>
          </ul>  
        </b-col>
        <b-col md="6" class="skill-detail">
          <ul>
            <li><font-awesome-icon :icon="faHandPointRight"/> <span class="highlight-txt">Node(Express), Spring Boot</span>를 활용한 Application Backend 개발 경험</li>
            <li><font-awesome-icon :icon="faHandPointRight"/> <span class="highlight-txt">Vue.js</span>를 활용한 SPA 개발 경험</li>
            <li><font-awesome-icon :icon="faHandPointRight"/> <span class="highlight-txt">AWS EC2, Code Deploy, Travis CI</span>를 활용한 웹 배포 경험</li>
            <li><font-awesome-icon :icon="faHandPointRight"/> <span class="highlight-txt">MySQL, MongoDB</span>을 활용한 CRUD 경험</li>
            <li><font-awesome-icon :icon="faHandPointRight"/> 형상관리 도구로 <span class="highlight-txt">Git, Github</span>활용</li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { faHtml5, faCss3Alt, faJava, faJs, faPython, faNode, faVuejs, faBootstrap, faAws, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Skill',
  data (){
    return {
      faHandPointRight,
      icons: [faHtml5, faCss3Alt, faJava, faJs, faPython, faNode, faDatabase, faVuejs, faBootstrap, faAws, faGithub]
    }
  }
}
</script>
<style>
body {
  font-family: arial, helvetica;
}
.section {
  position: relative;
  text-align: center;
}
.content{
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
}
.content-header{
  color:#eba63f;
  font-weight: bold;
  font-size: 1.8em;
}
.skill-detail li{
  font-size: 1.5em;
  margin-top: 5%;
}
.icon-inline{
  display: inline;
}
.dev-icon{
  margin: 4%;
  color: rgb(181, 181, 181);
}
.dev-icon:hover{
  color:#EBA63F;
}
</style>
