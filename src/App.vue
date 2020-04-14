<template>
  <div id="app">
    <Header></Header>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
      <div class="section">
        <h3>Section 4</h3>
      </div>
    </full-page>
    <ul class="footer">
      <li ><img class ="float-right" id="home-btn" @click="$refs.fullpage.api.moveTo(1,1)" :src="`${publicPath}arrow-top.png`"></li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header
  },
  data: function() {
    return {
      publicPath: process.env.BASE_URL,
      options: {
        afterLoad: this.afterLoad,
        paddingTop: "15%",
        menu: "#myMenu",
        anchors: ["home", "skills", "projects", "open-source"],
        sectionsColor: ["#F7F4E9", "#F7F4E9", "#F7F4E9", "#F7F4E9"]
      }
    };
  },
  methods: {
    afterLoad: function(origin, destination) {
      console.log("After load....");
      console.log(destination);
    },
  }
};
</script>

<style lang='css'>
@charset "UTF-8";
/* Reset CSS
 * --------------------------------------- */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
table {
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-weight: normal;
  font-style: normal;
}
strong {
  font-weight: bold;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
  margin: 0;
  padding: 0;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
}
* {
  -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box; /* <=28 */
  box-sizing: border-box;
}

/* Custom
 * --------------------------------------- */
body {
  font-family: arial, helvetica;
}
.section {
  position: relative;
  text-align: center;
}
h3 {
  font-size: 5em;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
.footer {
  position: fixed;
    bottom: 2%;
    margin: 0;
    z-index: 99;
    left: 0;
    right: 2%;
    text-align: right;
}
.footer li{
    display: inline-block;
}
#home-btn {
  width:15%;
  display: block;
  color: #fff;
  cursor: pointer;
}
</style>