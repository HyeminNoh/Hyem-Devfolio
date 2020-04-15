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
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style lang="css">
#menu {
  padding: 2%;
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
}
.item:hover {
  outline: none;
  color: #eba63f;
}
</style>
