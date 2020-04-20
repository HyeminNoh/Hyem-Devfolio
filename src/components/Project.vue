<template>
  <div class="section fp-auto-height">
    <div class="content" id="project-content">
      <p class="content-header">🌱 Projects</p>
      <hr>
      <b-row>
        <b-col lg="4" md="6" sm="12" v-for="(value, index) in projects" :key="index">
          <div class="project-card">
            <div class="project-img">
              <b-img :src="value.img" fluid center style="height: 18em;"/>
            </div>
            <div>
              <p class="mb-0 project-title">{{ value.name }}</p>
              <div class="stacks">
                <b-badge class="stack-badge" v-for="(v,i) in value.stack" :key="i" pill variant="secondary">{{ v }}</b-badge>
              </div>
            </div>
            <div class="project-detail">
              <b-card-text>
                {{ value.detail }}
              </b-card-text>
            </div>
            <div class="project-btn-div">
                <b-button id="link-btn" v-if="value.link" :href="value.link">🔍 구경하기</b-button>
                <b-button id="github-btn" :href="value.github">
                  <font-awesome-icon :icon="faGithub"/> Github
                </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
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
          link: "https://iamnotavirus-campaign.com",
          github: "https://github.com/HyeminNoh/IamNotAVirus",
        },
        {
          name: "헤어스타일링 지원 스마트미러",
          detail: "OpenCV를 활용한 안면인식을 통해 헤어이미지 합성이 가능한 스마트 미러",
          stack: ["Python", "OpenCV", "Flask"],
          img: "https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/mirror.png?alt=media&token=1f7eed27-d2fd-4ce4-afbe-89810229a599",
          github: "https://github.com/HyeminNoh/SK_Mirror",
        },
        {
          name: "'글로벌엔지니어링(주)' 기업 사이트 제작",
          detail: "2017년 현장실습 기업의 웹 사이트를 제작",
          stack: ["Apache", "php", "javascript", "bootstrap"],
          img: "https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/work-experience.png?alt=media&token=e7a0ba35-71c2-4a01-bb1f-3a26070adad5",
          github: "https://github.com/HyeminNoh/2017Work-Experience",
        }
      ]
    }
  }
}
</script>
<style>
@media all and (min-width: 960px) {
    #project-content{
      height: 100%;
    }
}

@media all and (max-width: 599px) and (min-width: 320px) {
    #project-content{
      height: auto !important;
      padding-bottom: 200%;
    }
}

.project-card {
  color: rgb(88, 96, 105);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  margin: 1%;
}
.project-img{
  height: 20em;
}
.project-title{
  font-size: 1.5em;
  font-weight: bold;
  color: black;
}
.project-detail{
 margin-top: 1em;
 height: 5em;
}
.project-btn-div{
  text-align: right;
}
.stacks{
  margin-top: 0.5em
}
.stack-badge{
  margin-right: 0.3em;
}
#github-btn:hover{
  background-color: #438945;
  border-color: #438945;
  font-size: 1em;
}
#github-btn{
  background-color: gray;
  border-color: gray;
  font-size: 1em;
}
#link-btn{
  background-color: gray;
  border-color: gray;
  margin-right: 0.3em;
  font-size: 1em;
}
#link-btn:hover{
  background-color: #EBA63F;
  border-color: #EBA63F;
  margin-right: 0.3em;
  font-size: 1em;
}

</style>
