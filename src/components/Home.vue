<template>
  <div class="section">
    <div class="content">
      <p id="title">안녕하세요 <span class="highlight-txt">노혜민</span>입니다 👋</p>
      <br>
      <p id="detail"><span class="highlight-txt">Web Full-stack Developer</span>를 꿈꾸는 주니어 개발자입니다 👩‍💻
        <br>타고난 외향적인 성격, 완벽한 <span class="highlight-txt">OOOO</span>타입 😉
        <br>한번 시작한건 끝을 보는 타입, 밤샘을 즐기는 편 🔥
        <br>7년 쿠키런 외길인생, I 🧡쿠키런
      </p>
      <div class="main-btn">
      <b-button id="basic-btn" variant="outline-success" size="lg" :href="email">CONTACT ME ✉️</b-button>
      <b-button id="basic-btn" variant="outline-success" size="lg" :href="resume">SEE MY RESUME 👀</b-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: function(){
    return{
      email: 'mailto:shrmffkfk@naver.com',
      resume: 'resume link',
    }
  }
}
</script>
<style>
.section {
  position: relative;
  text-align: center;;
}
.content{
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
}
#title{
  font-size: 2.5em;
  font-weight: bold;
}
#detail{
  line-height: 1.8em;
  font-size: 1.25em;
}
.highlight-txt{
  color:#438945;
  font-weight: bold;
}
.main-btn{
  margin-top: 10%;
}
.main-btn #basic-btn{
  margin-right: 2%;
  border-color: #438945;
  color: #438945;
}
.main-btn #basic-btn:hover{
  margin-right: 2%;
  background-color: #438945;
  color: #ffffff;
}
</style>
