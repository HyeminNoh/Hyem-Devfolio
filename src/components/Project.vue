<template>
  <div class="section">
    <div class="content">
      <p class="content-header">🌱 Projects</p>
      <hr>
      <b-card-group class="project-cards" deck>
        <b-card v-for="(value, index) in projects" :key="index" :img-src="value.img" img-alt="Image" img-height="250px" >
          <template v-slot:header>
            <h4 class="mb-0">{{ value.name }}</h4>
            <div class="stacks">
              <b-badge class="stack-badge" v-for="(v,i) in value.stack" :key="i" pill variant="secondary">{{ v }}</b-badge>
            </div>
          </template>
          <b-card-body>
            <b-card-text>
              {{ value.detail }}
            </b-card-text>
          </b-card-body>
          <template v-slot:footer>
            <div style="text-align: right;">
              <b-button id="github-btn" :href="value.github">
                <font-awesome-icon :icon="faGithub"/> Github
              </b-button>
            </div>
          </template>
        </b-card>
      </b-card-group>
    </div>  
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Project',
  data(){
    return {
      faGithub,
      projects:[
        {
          name: "#IamNotAVirus 웹 사이트",
          detail: "코로나-19로 인한 인종차별 문제를 계기로 제작한 올바른 코로나 정보 전달 사이트",
          stack: ["SpringBoot", "Jsoup", "Vue.js", "Bootstrap"],
          img: "https://github.com/HyeminNoh/IamNotAVirus/raw/master/screenshoot/main_screenshot.png",
          github: "",
        },
        {
          name: "헤어스타일링 지원 스마트미러",
          detail: "OpenCV를 활용한 안면인식을 통해 헤어이미지 합성이 가능한 스마트 미러",
          stack: ["Python", "OpenCV", "Flask"],
          img: "https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/mirror.png?alt=media&token=1f7eed27-d2fd-4ce4-afbe-89810229a599",
          github: "",
        },
        {
          name: "'글로벌엔지니어링(주)' 기업 사이트 제작",
          detail: "2017년 현장실습 기업의 웹 사이트를 제작",
          stack: ["Apache", "php", "javascript", "bootstrap"],
          img: "https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/work-experience.png?alt=media&token=e7a0ba35-71c2-4a01-bb1f-3a26070adad5",
          github: "",
        }
      ]
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
.project-cards{
  margin: 3%;
}
.stacks{
  margin-top: 3%;
}
.stack-badge{
  margin-right: 1%;
}
#github-btn:hover{
  background-color: #438945;
  border-color: #438945;
}
#github-btn{
  background-color: gray;
  border-color: gray;
}

</style>
