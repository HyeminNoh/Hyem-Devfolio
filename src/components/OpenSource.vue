<template>
  <div class="section">
    <div class="content">
      <b-row>
        <b-col>
          <p class="content-header">🌱 Open Source Projects</p>
        </b-col>
        <b-col style="text-align:right">
          <b-button size="lg" id="github-btn" href="https://github.com/hyeminnoh" target="_blank">
          <font-awesome-icon :icon="faGithub" />More...
        </b-button>
        </b-col>
      </b-row>
      <hr>
      <div class="repo-cards-main-div">
        <b-row class="repo-cards-row" v-for="n in cardlength" :key="n" v-bind="pinnedRepo">
          <b-col>
            <div class="repo-card-div" @click="togithub(pinnedRepo[n].node.url)">
              <div class="repo-name-div">
                <p class="repo-name">{{ pinnedRepo[n].node.nameWithOwner }}</p>
              </div>
              <p class="repo-description">{{ pinnedRepo[n].node.description }}</p>
              <div class="repo-stats">
                <div class="repo-left-stat">
                  <span>
                    <p><font-awesome-icon :icon="faStar" :color="gray"/> {{ pinnedRepo[n].node.stargazers.totalCount }}</p>
                  </span>
                  <span v-if="pinnedRepo[n].node.primaryLanguage">
                    <p><font-awesome-icon :icon="faCircle" :color="pinnedRepo[n].node.primaryLanguage.color"/> {{ pinnedRepo[n].node.primaryLanguage.name }}</p>
                  </span>
                  <span>
                    <p><font-awesome-icon :icon="faCodeBranch" :color="gray"/> {{ pinnedRepo[n].node.forkCount }}</p>
                  </span>
                </div>
                <div class="repo-right-stat">
                  <p>{{ pinnedRepo[n].node.diskUsage }} KB</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="repo-card-div" @click="togithub(pinnedRepo[n+1].node.url)">
              <div class="repo-name-div">
                <p class="repo-name">{{ pinnedRepo[n+1].node.nameWithOwner }}</p>
              </div>
              <p class="repo-description">{{ pinnedRepo[n+1].node.description }}</p>
              <div class="repo-stats">
                <div class="repo-left-stat">
                  <span>
                    <p><font-awesome-icon :icon="faStar" :color="gray"/> {{ pinnedRepo[n+1].node.stargazers.totalCount }}</p>
                  </span>
                  <span v-if="pinnedRepo[n+1].node.primaryLanguage">
                    <p><font-awesome-icon :icon="faCircle" :color="pinnedRepo[n+1].node.primaryLanguage.color"/> {{ pinnedRepo[n+1].node.primaryLanguage.name }}</p>
                  </span>
                  <span>
                    <p><font-awesome-icon :icon="faCodeBranch" :color="gray"/> {{ pinnedRepo[n+1].node.forkCount }}</p>
                  </span>
                </div>
                <div class="repo-right-stat">
                  <p>{{ pinnedRepo[n+1].node.diskUsage }} KB</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faStar,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "OpenSource",
  methods: {
    togithub(url) {
      window.open(url,'_blank');
    }
  },
  data() {
    return {
      faGithub,
      faCircle,
      faStar,
      faCodeBranch,
      pinnedRepo: [],
      cardlength: []
    };
  },
  created: function() {
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
        var repos = result.data.repositoryOwner.pinnedRepositories.edges;
        this.pinnedRepo = repos;
        this.repolength = repos.length;
        if (repos.length % 2 == 0) {
          for (var i = 0; i < repos.length / 2; i++) {
            this.cardlength.push(i * 2);
          }
        } else {
          for (var j = 0; j < repos.length / 2 + 1; j++) {
            this.cardlength.push(j * 2);
          }
        }
      });
  }
};
</script>
<style>
body {
  font-family: arial, helvetica;
}
.section {
  position: relative;
  text-align: center;
}
.btn-div {
  margin-top: 1%;
  text-align: right;
}
#open-source-title {
  color: black;
}
#open-source-title:hover {
  color: #438945;
}
#language-text {
  margin-right: 20px;
}
#starCount-text {
  margin-right: 20px;
}
.repo-cards-main-div{
  padding-bottom: 5%;
}
.repo-card-div {
  color: rgb(88, 96, 105);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  cursor: pointer;
  margin: 1%;
}
.repo-card-div:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
}

.repo-stats {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(106, 115, 125);
}

.repo-left-stat {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
}

.language-color {
  width: 10px;
  height: 10px;
  background-color: blue;
  margin-right: 0.25rem;
  border-radius: 100%;
}

.repo-left-stat span {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.75rem;
}

.repo-name-div {
  display: flex;
  align-items: center;
}

.repo-svg {
  margin-right: 0.5rem;
  min-width: 16px;
}

.repo-name {
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(36, 41, 46);
  margin-bottom: 0.75rem;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.5px;
  overflow: hidden;
  margin: 0px;
}

.repo-star-svg {
  margin-right: 0.3rem;
}

.repo-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
