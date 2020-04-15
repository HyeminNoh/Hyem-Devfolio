<template>
  <div class="section">
    <div class="content">
      <b-row>
        <b-col md="6">
          <p class="content-header">📍 Language</p>
          <hr>
        </b-col>
        <b-col md="6">
          <p class="content-header">📍 Framework</p>
          <hr>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  components: {
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
  font-size: 1.5em;
}
</style>
