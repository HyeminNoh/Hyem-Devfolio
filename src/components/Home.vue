<template>
  <div class="section">
    <div class="chatbox">
      <div class="background-div">
        <img id="emoji" v-animate-css="'bounce'" src="../assets/myemoji.png" />
      </div>
      <div class="front-div">
        <p id="title">
          안녕하세요
          <span class="highlight-txt">노혜민</span>입니다 👋
        </p>
        <br />
        <p id="detail">
          <span class="highlight-txt">Web Full-stack Developer</span>를 꿈꾸는 주니어 개발자입니다 👩‍💻
          <br />타고난 외향적인 성격, 완벽한
          <span class="highlight-txt">ESFJ</span>타입 😉
          <br />한번 시작한건 끝을 보는 타입, 밤샘을 즐기는 편 🔥
          <br />7년 쿠키런 외길인생, I 🧡쿠키런
        </p>
        <div class="main-btn">
          <b-button id="basic-btn" variant="outline-success" size="lg" :href="email">CONTACT ME ✉️</b-button>
          <b-button
            id="basic-btn"
            variant="outline-success"
            size="lg"
            :href="resume"
            target="_blank"
          >SEE MY RESUME 👀</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      email: "mailto:shrmffkfk@naver.com",
      resume:
        "#"
    };
  },
  created: function() {}
};
</script>
<style>
.chatbox {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 70%;
  height: 80%;
  padding: 3%;
  border-radius: 0.2em;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
}

.front-div {
  top: 50%;
  transform: translateY(-95%);
  text-align: left;
  margin-left: 5%;
  z-index: 2;
}

.background-div {
  top: 50%;
  /*요소의 높이의 반 보다 조금 위(70%) 만큼 위로 이동*/
  transform: translateY(5%);
  text-align: right;
  z-index: 1;
}

#emoji {
  width: 30%;
  margin-right: 5%;
}

@media all and (max-width: 959px) and (min-width: 600px) {
  .front-div {
    margin-top: 15em;
  }
  .background-div {
    visibility: hidden;
  }
}

@media all and (max-width: 599px) and (min-width: 320px) {
  .front-div {
    margin-left: 0.5em;
    margin-top: 20em;
  }
  .background-div {
    visibility: hidden;
  }
}

#title {
  font-size: 2.5em;
  font-weight: bold;
}
#detail {
  line-height: 1.8em;
  font-size: 1.25em;
}
.main-btn {
  margin-top: 3em;
}
.main-btn #basic-btn {
  margin-top: 1em;
  margin-right: 0.5em;
  border-color: #438945;
  color: #438945;
  font-size: 1.2em;
}
.main-btn #basic-btn:hover {
  margin-top: 1em;
  margin-right: 0.5em;
  background-color: #438945;
  color: #ffffff;
  font-size: 1.2em;
}
@media all and (max-width: 599px) and (min-width: 320px) {
  #title {
    font-size: 1.7em;
    font-weight: bold;
  }
  #detail {
    line-height: 1.8em;
    font-size: 1em;
  }
  .main-btn {
    font-size: 0.8em;
  }
}
.highlight-txt {
  color: #438945;
  font-weight: bold;
}

</style>
