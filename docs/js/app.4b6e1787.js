(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hyem-devfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"25f3":function(t,e,n){"use strict";var a=n("f7bc"),o=n.n(a);o.a},"3e28":function(t,e,n){"use strict";var a=n("78a8"),o=n.n(a);o.a},"54d8":function(t,e,n){"use strict";var a=n("9b48"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("Home"),n("Skills"),n("Projects"),n("OpenSource")],1),n("ul",{staticClass:"footer"},[n("li",[n("img",{staticClass:"float-right",attrs:{id:"home-btn",src:t.publicPath+"arrow-top.png"},on:{click:function(e){return t.$refs.fullpage.api.moveTo(1,1)}}})])])],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"md",id:"menu",fixed:"top"}},[n("b-navbar-brand",{staticClass:"mb-0",staticStyle:{color:"#438945","font-weight":"bold","font-size":"1.8em"},attrs:{href:"#home"}},[t._v("Hyem's Devfolio")]),n("b-navbar-toggle",{attrs:{id:"nav-toggle",target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"#home"}},[n("p",{staticClass:"item"},[t._v("Home")])]),n("b-nav-item",{attrs:{href:"#skills"}},[n("p",{staticClass:"item"},[t._v("Skills")])]),n("b-nav-item",{attrs:{href:"#projects"}},[n("p",{staticClass:"item"},[t._v("Projects")])]),n("b-nav-item",{attrs:{href:"#open-source"}},[n("p",{staticClass:"item"},[t._v("Open-Source")])])],1)],1)],1)},r=[],c=(n("8baf"),n("2877")),l={},p=Object(c["a"])(l,s,r,!1,null,null,null),u=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section fp-auto-height"},[n("div",{staticClass:"content align-middle"},[t._m(0),n("br"),t._m(1),n("div",{staticClass:"main-btn"},[n("b-button",{attrs:{id:"basic-btn",variant:"outline-success",size:"lg",href:t.email}},[t._v("CONTACT ME ✉️")]),n("b-button",{attrs:{id:"basic-btn",variant:"outline-success",size:"lg",href:t.resume}},[t._v("SEE MY RESUME 👀")])],1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"title"}},[t._v("안녕하세요 "),n("span",{staticClass:"highlight-txt"},[t._v("노혜민")]),t._v("입니다 👋")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"detail"}},[n("span",{staticClass:"highlight-txt"},[t._v("Web Full-stack Developer")]),t._v("를 꿈꾸는 주니어 개발자입니다 👩‍💻 "),n("br"),t._v("타고난 외향적인 성격, 완벽한 "),n("span",{staticClass:"highlight-txt"},[t._v("ESFJ")]),t._v("타입 😉 "),n("br"),t._v("한번 시작한건 끝을 보는 타입, 밤샘을 즐기는 편 🔥 "),n("br"),t._v("7년 쿠키런 외길인생, I 🧡쿠키런 ")])}],h={name:"Home",components:{},data:function(){return{email:"mailto:shrmffkfk@naver.com",resume:"resume link"}}},v=h,g=(n("8b71"),Object(c["a"])(v,d,f,!1,null,null,null)),b=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section fp-auto-height"},[n("div",{staticClass:"content"},[n("p",{staticClass:"content-header"},[t._v("🌱 Skills")]),n("hr"),n("b-row",[n("b-col",{attrs:{md:"5"}},[n("ul",{staticClass:"skill-icons"},t._l(t.icons,(function(t,e){return n("li",{key:e,staticClass:"icon-inline"},[n("font-awesome-icon",{staticClass:"dev-icon",attrs:{icon:t,size:"6x"}})],1)})),0)]),n("b-col",{staticClass:"skill-detail",attrs:{md:"6"}},[n("ul",[n("li",[n("font-awesome-icon",{attrs:{icon:t.faHandPointRight}}),n("span",{staticClass:"highlight-txt"},[t._v(" Node(Express), Spring Boot")]),t._v("를 활용한 Application Backend 개발 경험 ")],1),n("li",[n("font-awesome-icon",{attrs:{icon:t.faHandPointRight}}),n("span",{staticClass:"highlight-txt"},[t._v(" Vue.js")]),t._v("를 활용한 SPA 개발 경험 ")],1),n("li",[n("font-awesome-icon",{attrs:{icon:t.faHandPointRight}}),n("span",{staticClass:"highlight-txt"},[t._v(" AWS EC2, Code Deploy, Travis CI")]),t._v("를 활용한 웹 배포 경험 ")],1),n("li",[n("font-awesome-icon",{attrs:{icon:t.faHandPointRight}}),n("span",{staticClass:"highlight-txt"},[t._v(" MySQL, MongoDB")]),t._v("을 활용한 CRUD 경험 ")],1),n("li",[n("font-awesome-icon",{attrs:{icon:t.faHandPointRight}}),t._v(" 형상관리 도구로 "),n("span",{staticClass:"highlight-txt"},[t._v(" Git, Github")]),t._v("활용 ")],1)])])],1)],1)])},_=[],C=n("f2d1"),y=n("b702"),k=n("c074"),w={name:"Skill",data:function(){return{faHandPointRight:y["a"],icons:[C["f"],C["c"],C["g"],C["h"],C["j"],C["i"],k["c"],C["k"],C["b"],C["a"],C["e"]]}}},j=w,O=(n("c03d"),Object(c["a"])(j,m,_,!1,null,null,null)),x=O.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section fp-auto-height"},[n("div",{staticClass:"content"},[n("p",{staticClass:"content-header"},[t._v("🌱 Projects")]),n("hr"),n("b-card-group",{staticClass:"project-cards",attrs:{deck:""}},t._l(t.projects,(function(e,a){return n("b-card",{key:a,attrs:{"img-src":e.img,"img-alt":"Image","img-height":"250px"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h4",{staticClass:"mb-0"},[t._v(t._s(e.name))]),n("div",{staticClass:"stacks"},t._l(e.stack,(function(e,a){return n("b-badge",{key:a,staticClass:"stack-badge",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(e))])})),1)]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticStyle:{"text-align":"right"}},[e.link?n("b-button",{attrs:{id:"link-btn",href:e.link}},[t._v("🔍 구경하기")]):t._e(),n("b-button",{attrs:{id:"github-btn",href:e.github}},[n("font-awesome-icon",{attrs:{icon:t.faGithub}}),t._v(" Github ")],1)],1)]},proxy:!0}],null,!0)},[n("b-card-body",[n("b-card-text",[t._v(" "+t._s(e.detail)+" ")])],1)],1)})),1)],1)])},S=[],P={name:"Project",data:function(){return{faGithub:C["e"],projects:[{name:"#IamNotAVirus 웹 사이트",detail:"코로나-19로 인한 인종차별 문제를 계기로 제작한 올바른 코로나 정보 전달 사이트",stack:["SpringBoot","Jsoup","Vue.js","Bootstrap"],img:"https://github.com/HyeminNoh/IamNotAVirus/raw/master/screenshoot/main_screenshot.png",link:"https://iamnotavirus-campaign.com",github:""},{name:"헤어스타일링 지원 스마트미러",detail:"OpenCV를 활용한 안면인식을 통해 헤어이미지 합성이 가능한 스마트 미러",stack:["Python","OpenCV","Flask"],img:"https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/mirror.png?alt=media&token=1f7eed27-d2fd-4ce4-afbe-89810229a599",github:""},{name:"'글로벌엔지니어링(주)' 기업 사이트 제작",detail:"2017년 현장실습 기업의 웹 사이트를 제작",stack:["Apache","php","javascript","bootstrap"],img:"https://firebasestorage.googleapis.com/v0/b/hyem-portfolio.appspot.com/o/work-experience.png?alt=media&token=e7a0ba35-71c2-4a01-bb1f-3a26070adad5",github:""}]}}},E=P,H=(n("54d8"),Object(c["a"])(E,R,S,!1,null,null,null)),B=H.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section fp-auto-height"},[n("div",{staticClass:"content"},[n("b-row",[n("b-col",[n("p",{staticClass:"content-header"},[t._v("🌱 Open Source Projects")])]),n("b-col",{staticStyle:{"text-align":"right"}},[n("b-button",{attrs:{size:"lg",id:"github-btn",href:"https://github.com/hyeminnoh",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:t.faGithub}}),t._v(" More... ")],1)],1)],1),n("hr"),n("div",{staticClass:"repo-cards-main-div"},t._l(t.cardlength,(function(e){return n("b-row",t._b({key:e,staticClass:"repo-cards-row"},"b-row",t.pinnedRepo,!1),[n("b-col",[n("div",{staticClass:"repo-card-div",on:{click:function(n){return t.togithub(t.pinnedRepo[e].node.url)}}},[n("div",{staticClass:"repo-name-div"},[n("p",{staticClass:"repo-name"},[t._v(t._s(t.pinnedRepo[e].node.nameWithOwner))])]),n("p",{staticClass:"repo-description"},[t._v(t._s(t.pinnedRepo[e].node.description))]),n("div",{staticClass:"repo-stats"},[n("div",{staticClass:"repo-left-stat"},[n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faStar,color:t.gray}}),t._v(" "+t._s(t.pinnedRepo[e].node.stargazers.totalCount))],1)]),t.pinnedRepo[e].node.primaryLanguage?n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faCircle,color:t.pinnedRepo[e].node.primaryLanguage.color}}),t._v(" "+t._s(t.pinnedRepo[e].node.primaryLanguage.name))],1)]):t._e(),n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faCodeBranch,color:t.gray}}),t._v(" "+t._s(t.pinnedRepo[e].node.forkCount))],1)])]),n("div",{staticClass:"repo-right-stat"},[n("p",[t._v(t._s(t.pinnedRepo[e].node.diskUsage)+" KB")])])])])]),n("b-col",[n("div",{staticClass:"repo-card-div",on:{click:function(n){return t.togithub(t.pinnedRepo[e+1].node.url)}}},[n("div",{staticClass:"repo-name-div"},[n("p",{staticClass:"repo-name"},[t._v(t._s(t.pinnedRepo[e+1].node.nameWithOwner))])]),n("p",{staticClass:"repo-description"},[t._v(t._s(t.pinnedRepo[e+1].node.description))]),n("div",{staticClass:"repo-stats"},[n("div",{staticClass:"repo-left-stat"},[n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faStar,color:t.gray}}),t._v(" "+t._s(t.pinnedRepo[e+1].node.stargazers.totalCount))],1)]),t.pinnedRepo[e+1].node.primaryLanguage?n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faCircle,color:t.pinnedRepo[e+1].node.primaryLanguage.color}}),t._v(" "+t._s(t.pinnedRepo[e+1].node.primaryLanguage.name))],1)]):t._e(),n("span",[n("p",[n("font-awesome-icon",{attrs:{icon:t.faCodeBranch,color:t.gray}}),t._v(" "+t._s(t.pinnedRepo[e+1].node.forkCount))],1)])]),n("div",{staticClass:"repo-right-stat"},[n("p",[t._v(t._s(t.pinnedRepo[e+1].node.diskUsage)+" KB")])])])])])],1)})),1)],1)])},M=[],$=n("8785"),z=n("2c82");function A(){var t=Object($["a"])(['\n          {\n            repositoryOwner(login: "','") {\n              ... on User {\n                pinnedRepositories(first: 6) {\n                  edges {\n                    node {\n                      nameWithOwner\n                      description\n                      forkCount\n                      stargazers {\n                        totalCount\n                      }\n                      url\n                      id\n                      diskUsage\n                      primaryLanguage {\n                        name\n                        color\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        ']);return A=function(){return t},t}var L={name:"OpenSource",methods:{togithub:function(t){window.open(t,"_blank")}},data:function(){return{faGithub:C["e"],faCircle:k["a"],faStar:k["d"],faCodeBranch:k["b"],pinnedRepo:[],cardlength:[]}},created:function(){var t=this,e=new z["a"]({uri:"https://api.github.com/graphql",request:function(t){t.setContext({headers:{authorization:"Bearer ".concat("9dc642b8be273151d739905dcc6751b41e7dbe96")}})}});e.query({query:Object(z["b"])(A(),"HyeminNoh")}).then((function(e){var n=e.data.repositoryOwner.pinnedRepositories.edges;if(t.pinnedRepo=n,t.repolength=n.length,n.length%2==0)for(var a=0;a<n.length/2;a++)t.cardlength.push(2*a);else for(var o=0;o<n.length/2+1;o++)t.cardlength.push(2*o)}))}},T=L,G=(n("3e28"),Object(c["a"])(T,F,M,!1,null,null,null)),N=G.exports,U={name:"App",components:{Header:u,Home:b,Skills:x,Projects:B,OpenSource:N},data:function(){return{publicPath:"/hyem-devfolio/",options:{paddingTop:"5%",anchors:["home","skills","projects","open-source"],sectionsColor:["#F7F4E9","#F7F4E9","#F7F4E9","#F7F4E9"],responsiveWidth:1366}}}},V=U,W=(n("25f3"),Object(c["a"])(V,o,i,!1,null,null,null)),D=W.exports,I=n("5f5b"),q=n("b1e0"),J=n("a45e"),K=n.n(J),Q=(n("f9e3"),n("2dd8"),n("ecee")),Y=n("ad3d");a["default"].use(I["a"]),a["default"].use(q["a"]),a["default"].use(K.a),Q["c"].add(k["e"]),Q["c"].add(C["d"]),a["default"].component("font-awesome-icon",Y["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(D)}}).$mount("#app")},6265:function(t,e,n){},6860:function(t,e,n){},"78a8":function(t,e,n){},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var a=n("88d7"),o=n.n(a);o.a},"8baf":function(t,e,n){"use strict";var a=n("6860"),o=n.n(a);o.a},"9b48":function(t,e,n){},c03d:function(t,e,n){"use strict";var a=n("6265"),o=n.n(a);o.a},f7bc:function(t,e,n){}});
//# sourceMappingURL=app.4b6e1787.js.map