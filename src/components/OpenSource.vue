<template>
  <div class="section">
    <div class="content">
      <p class="content-header">🌱 Open Source Projects</p>
      <hr>
      <b-row class="repo-cards-row">
        <b-col md="6">
          <b-card class="repo-card" v-for="(v,i) in evenRepo" :key="i">
            <p>{{ v.node.nameWithOwner }}</p>
            <p>{{ v.node.description }}</p>
            <p v-if="!v.node.primaryLanguage">MarkDown</p>
            <p v-if="v.node.primaryLanguage">{{ v.node.primaryLanguage.name }}</p>
            <p v-if="v.node.primaryLanguage">{{ v.node.primaryLanguage.color }}</p>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="repo-card" v-for="(v,i) in oddRepo" :key="i">
            <p>{{ v.node.nameWithOwner }}</p>
            <p>{{ v.node.description }}</p>
            <p v-if="v.node.primaryLanguage">{{ v.node.primaryLanguage.name }}</p>
            <p v-if="v.node.primaryLanguage">{{ v.node.primaryLanguage.color }}</p>
          </b-card>
        </b-col>
      </b-row>
      <div class="btn-div">
        <b-button size="lg" id="github-btn" href="https://github.com/hyeminnoh" target="_blank"><font-awesome-icon :icon="faGithub"/> More...</b-button>
      </div>
      </div>
    </div>
</template>

<script>
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'OpenSource',
  data() {
    return {
      faGithub,
      evenRepo: [],
      oddRepo: [],
    }
  },
  created: function(){
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${process.env.VUE_APP_GITHUB_NAME}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => {
        var pinnedRepo = result.data.repositoryOwner.pinnedRepositories.edges;
        for(var i=0; i<pinnedRepo.length; i++){
          if(i%2==0){
            this.evenRepo.push(pinnedRepo[i]);
          }
          if(i%2!=0){
            this.oddRepo.push(pinnedRepo[i]);
          }
          console.log(pinnedRepo[i]);
        }
      });
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
.repo-card{
  margin-top: 2%;
}
.btn-div{
  margin-top: 2%;
  text-align: right;
}
</style>
